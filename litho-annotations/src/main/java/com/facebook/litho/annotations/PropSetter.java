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

package com.facebook.litho.annotations;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

/**
 * Indicates that a method implementation sets {@link Prop}. It is intended to be used on the
 * generated Component.Builder method.
 */
@Retention(RetentionPolicy.CLASS)
public @interface PropSetter {
  /** @return {@link Prop} name that method with this annotation sets. */
  String value();
  /** @return true if the {@link Prop} is required, false if is optional. */
  boolean required();
}