import type { Integration } from '@sentry/types';
import type { ReplayConfiguration } from './types';
/**
 * The main replay integration class, to be passed to `init({  integrations: [] })`.
 */
export declare class Replay implements Integration {
    /**
     * @inheritDoc
     */
    static id: string;
    /**
     * @inheritDoc
     */
    name: string;
    /**
     * Options to pass to `rrweb.record()`
     */
    private readonly _recordingOptions;
    /**
     * Initial options passed to the replay integration, merged with default values.
     * Note: `sessionSampleRate` and `errorSampleRate` are not required here, as they
     * can only be finally set when setupOnce() is called.
     *
     * @private
     */
    private readonly _initialOptions;
    private _replay?;
    constructor({ flushMinDelay, flushMaxDelay, stickySession, useCompression, _experiments, sessionSampleRate, errorSampleRate, maskAllText, maskAllInputs, blockAllMedia, mask, unmask, block, unblock, ignore, maskFn, blockClass, blockSelector, maskInputOptions, maskTextClass, maskTextSelector, ignoreClass, }?: ReplayConfiguration);
    /** If replay has already been initialized */
    protected get _isInitialized(): boolean;
    /** Update _isInitialized */
    protected set _isInitialized(value: boolean);
    /**
     * We previously used to create a transaction in `setupOnce` and it would
     * potentially create a transaction before some native SDK integrations have run
     * and applied their own global event processor. An example is:
     * https://github.com/getsentry/sentry-javascript/blob/b47ceafbdac7f8b99093ce6023726ad4687edc48/packages/browser/src/integrations/useragent.ts
     *
     * So we call `replay.setup` in next event loop as a workaround to wait for other
     * global event processors to finish. This is no longer needed, but keeping it
     * here to avoid any future issues.
     */
    setupOnce(): void;
    /**
     * Initializes the plugin.
     *
     * Creates or loads a session, attaches listeners to varying events (DOM,
     * PerformanceObserver, Recording, Sentry SDK, etc)
     */
    start(): void;
    /**
     * Currently, this needs to be manually called (e.g. for tests). Sentry SDK
     * does not support a teardown
     */
    stop(): void;
    /**
     * Immediately send all pending events.
     */
    flush(): Promise<void> | void;
    /** Setup the integration. */
    private _setup;
}
//# sourceMappingURL=integration.d.ts.map