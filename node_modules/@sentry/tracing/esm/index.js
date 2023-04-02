import { addExtensionMethods, BrowserTracing, Apollo, Express, GraphQL, Mongo, Mysql, Postgres, Prisma } from '@sentry-internal/tracing';
export { BROWSER_TRACING_INTEGRATION_ID, BrowserTracing, IdleTransaction, Span, SpanStatus, TRACEPARENT_REGEXP, Transaction, addExtensionMethods, defaultRequestInstrumentationOptions, extractTraceparentData, getActiveTransaction, hasTracingEnabled, instrumentOutgoingRequests, spanStatusfromHttpCode, startIdleTransaction, stripUrlQueryAndFragment } from '@sentry-internal/tracing';

const Integrations = {
  BrowserTracing: BrowserTracing,
  Apollo: Apollo,
  Express: Express,
  GraphQL: GraphQL,
  Mongo: Mongo,
  Mysql: Mysql,
  Postgres: Postgres,
  Prisma: Prisma,
};

// Treeshakable guard to remove all code related to tracing

// Guard for tree
if (typeof __SENTRY_TRACING__ === 'undefined' || __SENTRY_TRACING__) {
  // We are patching the global object with our hub extension methods
  addExtensionMethods();
}

export { Integrations };
//# sourceMappingURL=index.js.map
