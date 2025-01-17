/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.facebook.litho;

import android.util.Pair;
import androidx.annotation.Nullable;
import androidx.annotation.VisibleForTesting;
import com.facebook.infer.annotation.Nullsafe;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Nullsafe(Nullsafe.Mode.LOCAL)
public class ResolveStateContext implements CalculationStateContext {

  private final int mLayoutVersion;
  private final int mRootComponentId;
  private final MeasuredResultCache mCache;
  private final int mComponentTreeId;

  private boolean mIsInterruptible = true;
  private @Nullable TreeState mTreeState;
  private @Nullable TreeFuture mLayoutStateFuture;
  private final @Nullable LithoNode mCurrentRoot;
  private @Nullable Map<Integer, LithoNode> mComponentIdToWillRenderLayout;
  private final @Nullable PerfEvent mPerfEventLogger;
  private final @Nullable ComponentsLogger mComponentsLogger;
  private @Nullable ArrayList<Pair<String, EventHandler<?>>> mCreatedEventHandlers = null;
  private final boolean mIsAccessibilityEnabled;

  ResolveStateContext(
      final int componentTreeId,
      final MeasuredResultCache cache,
      final TreeState treeState,
      final int layoutVersion,
      final int rootComponentId,
      final boolean isAccessibilityEnabled,
      final @Nullable TreeFuture layoutStateFuture,
      final @Nullable LithoNode currentRoot,
      final @Nullable PerfEvent perfEventLogger,
      final @Nullable ComponentsLogger componentsLogger) {
    mComponentTreeId = componentTreeId;
    mCache = cache;
    mTreeState = treeState;
    mLayoutVersion = layoutVersion;
    mRootComponentId = rootComponentId;
    mLayoutStateFuture = layoutStateFuture;
    mCurrentRoot = currentRoot;
    mPerfEventLogger = perfEventLogger;
    mComponentsLogger = componentsLogger;
    mIsAccessibilityEnabled = isAccessibilityEnabled;
  }

  /** Returns the {@link ComponentTree} id associated to this Resolve phase context. */
  @Override
  public int getTreeId() {
    return mComponentTreeId;
  }

  @Override
  public int getLayoutVersion() {
    return mLayoutVersion;
  }

  @Override
  public int getRootComponentId() {
    return mRootComponentId;
  }

  @Nullable
  LithoNode consumeLayoutCreatedInWillRender(int componentId) {
    if (mComponentIdToWillRenderLayout != null) {
      return mComponentIdToWillRenderLayout.remove(componentId);
    } else {
      return null;
    }
  }

  @Nullable
  LithoNode getLayoutCreatedInWillRender(int componentId) {
    if (mComponentIdToWillRenderLayout != null) {
      return mComponentIdToWillRenderLayout.get(componentId);
    } else {
      return null;
    }
  }

  void setLayoutCreatedInWillRender(int componentId, final @Nullable LithoNode node) {
    if (mComponentIdToWillRenderLayout == null) {
      mComponentIdToWillRenderLayout = new HashMap<>();
    }
    mComponentIdToWillRenderLayout.put(componentId, node);
  }

  boolean isInterruptible() {
    return mIsInterruptible;
  }

  boolean isLayoutInterrupted() {
    boolean isInterruptRequested =
        mLayoutStateFuture != null
            && mLayoutStateFuture.isInterruptRequested()
            && !ThreadUtils.isMainThread();

    return isInterruptible() && isInterruptRequested;
  }

  @Override
  public boolean isFutureReleased() {
    return mLayoutStateFuture != null && mLayoutStateFuture.isReleased();
  }

  @Nullable
  @Override
  public TreeFuture getLayoutStateFuture() {
    return mLayoutStateFuture;
  }

  @Override
  public void recordEventHandler(String globalKey, EventHandler<?> eventHandler) {
    if (mCreatedEventHandlers == null) {
      mCreatedEventHandlers = new ArrayList<>();
    }
    mCreatedEventHandlers.add(new Pair<>(globalKey, eventHandler));
  }

  @Override
  public @Nullable List<Pair<String, EventHandler<?>>> getCreatedEventHandlers() {
    return mCreatedEventHandlers;
  }

  public void markLayoutUninterruptible() {
    mIsInterruptible = false;
  }

  @Override
  public TreeState getTreeState() {
    if (mTreeState == null) {
      throw new IllegalStateException("Attempt to fetch TreeState after release");
    }

    return mTreeState;
  }

  public @Nullable LithoNode getCurrentRoot() {
    return mCurrentRoot;
  }

  @Override
  public MeasuredResultCache getCache() {
    return mCache;
  }

  @Override
  public boolean isAccessibilityEnabled() {
    return mIsAccessibilityEnabled;
  }

  public void release() {
    mComponentIdToWillRenderLayout = null;
    mLayoutStateFuture = null;
    mTreeState = null;
  }

  @VisibleForTesting
  public void setLayoutStateFuture(@Nullable TreeFuture layoutStateFuture) {
    mLayoutStateFuture = layoutStateFuture;
  }

  public @Nullable ComponentsLogger getComponentsLogger() {
    return mComponentsLogger;
  }

  public @Nullable PerfEvent getPerfEventLogger() {
    return mPerfEventLogger;
  }
}
