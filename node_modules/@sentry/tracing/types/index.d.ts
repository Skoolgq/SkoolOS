export { BrowserTracing, BROWSER_TRACING_INTEGRATION_ID, IdleTransaction, Span, SpanStatus, TRACEPARENT_REGEXP, Transaction, addExtensionMethods, defaultRequestInstrumentationOptions, extractTraceparentData, instrumentOutgoingRequests, getActiveTransaction, hasTracingEnabled, spanStatusfromHttpCode, startIdleTransaction, stripUrlQueryAndFragment, } from '@sentry-internal/tracing';
export type { RequestInstrumentationOptions, SpanStatusType } from '@sentry-internal/tracing';
import { Apollo, BrowserTracing, Express, GraphQL, Mongo, Mysql, Postgres, Prisma } from '@sentry-internal/tracing';
export declare const Integrations: {
    BrowserTracing: typeof BrowserTracing;
    Apollo: typeof Apollo;
    Express: typeof Express;
    GraphQL: typeof GraphQL;
    Mongo: typeof Mongo;
    Mysql: typeof Mysql;
    Postgres: typeof Postgres;
    Prisma: typeof Prisma;
};
//# sourceMappingURL=index.d.ts.map