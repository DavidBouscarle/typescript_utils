/**
 * Make the following class unable to be extended.
 *
 * @param target
 * @returns The new class
 */
export function final<T extends { new (...args: any[]): object }>(
    target: T
): T {
    return class Final extends target {
        constructor(...args: any[]) {
            if (new.target !== Final)
                throw new Error(`Cannot extend a final class "${target.name}"`);
            super(...args);
        }
    };
}
