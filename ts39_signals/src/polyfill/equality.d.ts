/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A comparison function which can determine if two values are equal.
 */
export type ValueEqualityFn<T> = (a: T, b: T) => boolean;
/**
 * The default equality function used for `signal` and `computed`, which uses referential equality.
 */
export declare function defaultEquals<T>(a: T, b: T): boolean;
//# sourceMappingURL=equality.d.ts.map