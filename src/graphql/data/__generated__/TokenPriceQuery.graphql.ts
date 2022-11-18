/**
 * @generated SignedSource<<1d98cb80be3f4df0f6f54ae3aa1097f6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Chain = "ARBITRUM" | "CELO" | "ETHEREUM" | "ETHEREUM_GOERLI" | "OPTIMISM" | "POLYGON" | "%future added value";
export type ContractInput = {
  address?: string | null;
  chain: Chain;
};
export type TokenPriceQuery$variables = {
  contract: ContractInput;
  skip1D: boolean;
  skip1H: boolean;
  skip1M: boolean;
  skip1W: boolean;
  skip1Y: boolean;
};
export type TokenPriceQuery$data = {
  readonly tokens: ReadonlyArray<{
    readonly market: {
      readonly priceHistory1D?: ReadonlyArray<{
        readonly timestamp: number;
        readonly value: number | null;
      } | null> | null;
      readonly priceHistory1H?: ReadonlyArray<{
        readonly timestamp: number;
        readonly value: number | null;
      } | null> | null;
      readonly priceHistory1M?: ReadonlyArray<{
        readonly timestamp: number;
        readonly value: number | null;
      } | null> | null;
      readonly priceHistory1W?: ReadonlyArray<{
        readonly timestamp: number;
        readonly value: number | null;
      } | null> | null;
      readonly priceHistory1Y?: ReadonlyArray<{
        readonly timestamp: number;
        readonly value: number | null;
      } | null> | null;
    } | null;
  } | null> | null;
};
export type TokenPriceQuery = {
  response: TokenPriceQuery$data;
  variables: TokenPriceQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "contract"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "skip1D"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "skip1H"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "skip1M"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "skip1W"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "skip1Y"
},
v6 = [
  {
    "items": [
      {
        "kind": "Variable",
        "name": "contracts.0",
        "variableName": "contract"
      }
    ],
    "kind": "ListValue",
    "name": "contracts"
  }
],
v7 = [
  {
    "kind": "Literal",
    "name": "currency",
    "value": "USD"
  }
],
v8 = [
  {
    "kind": "Literal",
    "name": "duration",
    "value": "HOUR"
  }
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "timestamp",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v11 = [
  (v9/*: any*/),
  (v10/*: any*/)
],
v12 = [
  {
    "kind": "Literal",
    "name": "duration",
    "value": "DAY"
  }
],
v13 = [
  {
    "kind": "Literal",
    "name": "duration",
    "value": "WEEK"
  }
],
v14 = [
  {
    "kind": "Literal",
    "name": "duration",
    "value": "MONTH"
  }
],
v15 = [
  {
    "kind": "Literal",
    "name": "duration",
    "value": "YEAR"
  }
],
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v17 = [
  (v9/*: any*/),
  (v10/*: any*/),
  (v16/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TokenPriceQuery",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "Token",
        "kind": "LinkedField",
        "name": "tokens",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": (v7/*: any*/),
            "concreteType": "TokenMarket",
            "kind": "LinkedField",
            "name": "market",
            "plural": false,
            "selections": [
              {
                "condition": "skip1H",
                "kind": "Condition",
                "passingValue": false,
                "selections": [
                  {
                    "alias": "priceHistory1H",
                    "args": (v8/*: any*/),
                    "concreteType": "TimestampedAmount",
                    "kind": "LinkedField",
                    "name": "priceHistory",
                    "plural": true,
                    "selections": (v11/*: any*/),
                    "storageKey": "priceHistory(duration:\"HOUR\")"
                  }
                ]
              },
              {
                "condition": "skip1D",
                "kind": "Condition",
                "passingValue": false,
                "selections": [
                  {
                    "alias": "priceHistory1D",
                    "args": (v12/*: any*/),
                    "concreteType": "TimestampedAmount",
                    "kind": "LinkedField",
                    "name": "priceHistory",
                    "plural": true,
                    "selections": (v11/*: any*/),
                    "storageKey": "priceHistory(duration:\"DAY\")"
                  }
                ]
              },
              {
                "condition": "skip1W",
                "kind": "Condition",
                "passingValue": false,
                "selections": [
                  {
                    "alias": "priceHistory1W",
                    "args": (v13/*: any*/),
                    "concreteType": "TimestampedAmount",
                    "kind": "LinkedField",
                    "name": "priceHistory",
                    "plural": true,
                    "selections": (v11/*: any*/),
                    "storageKey": "priceHistory(duration:\"WEEK\")"
                  }
                ]
              },
              {
                "condition": "skip1M",
                "kind": "Condition",
                "passingValue": false,
                "selections": [
                  {
                    "alias": "priceHistory1M",
                    "args": (v14/*: any*/),
                    "concreteType": "TimestampedAmount",
                    "kind": "LinkedField",
                    "name": "priceHistory",
                    "plural": true,
                    "selections": (v11/*: any*/),
                    "storageKey": "priceHistory(duration:\"MONTH\")"
                  }
                ]
              },
              {
                "condition": "skip1Y",
                "kind": "Condition",
                "passingValue": false,
                "selections": [
                  {
                    "alias": "priceHistory1Y",
                    "args": (v15/*: any*/),
                    "concreteType": "TimestampedAmount",
                    "kind": "LinkedField",
                    "name": "priceHistory",
                    "plural": true,
                    "selections": (v11/*: any*/),
                    "storageKey": "priceHistory(duration:\"YEAR\")"
                  }
                ]
              }
            ],
            "storageKey": "market(currency:\"USD\")"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/),
      (v4/*: any*/),
      (v3/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Operation",
    "name": "TokenPriceQuery",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "Token",
        "kind": "LinkedField",
        "name": "tokens",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": (v7/*: any*/),
            "concreteType": "TokenMarket",
            "kind": "LinkedField",
            "name": "market",
            "plural": false,
            "selections": [
              {
                "condition": "skip1H",
                "kind": "Condition",
                "passingValue": false,
                "selections": [
                  {
                    "alias": "priceHistory1H",
                    "args": (v8/*: any*/),
                    "concreteType": "TimestampedAmount",
                    "kind": "LinkedField",
                    "name": "priceHistory",
                    "plural": true,
                    "selections": (v17/*: any*/),
                    "storageKey": "priceHistory(duration:\"HOUR\")"
                  }
                ]
              },
              {
                "condition": "skip1D",
                "kind": "Condition",
                "passingValue": false,
                "selections": [
                  {
                    "alias": "priceHistory1D",
                    "args": (v12/*: any*/),
                    "concreteType": "TimestampedAmount",
                    "kind": "LinkedField",
                    "name": "priceHistory",
                    "plural": true,
                    "selections": (v17/*: any*/),
                    "storageKey": "priceHistory(duration:\"DAY\")"
                  }
                ]
              },
              {
                "condition": "skip1W",
                "kind": "Condition",
                "passingValue": false,
                "selections": [
                  {
                    "alias": "priceHistory1W",
                    "args": (v13/*: any*/),
                    "concreteType": "TimestampedAmount",
                    "kind": "LinkedField",
                    "name": "priceHistory",
                    "plural": true,
                    "selections": (v17/*: any*/),
                    "storageKey": "priceHistory(duration:\"WEEK\")"
                  }
                ]
              },
              {
                "condition": "skip1M",
                "kind": "Condition",
                "passingValue": false,
                "selections": [
                  {
                    "alias": "priceHistory1M",
                    "args": (v14/*: any*/),
                    "concreteType": "TimestampedAmount",
                    "kind": "LinkedField",
                    "name": "priceHistory",
                    "plural": true,
                    "selections": (v17/*: any*/),
                    "storageKey": "priceHistory(duration:\"MONTH\")"
                  }
                ]
              },
              {
                "condition": "skip1Y",
                "kind": "Condition",
                "passingValue": false,
                "selections": [
                  {
                    "alias": "priceHistory1Y",
                    "args": (v15/*: any*/),
                    "concreteType": "TimestampedAmount",
                    "kind": "LinkedField",
                    "name": "priceHistory",
                    "plural": true,
                    "selections": (v17/*: any*/),
                    "storageKey": "priceHistory(duration:\"YEAR\")"
                  }
                ]
              },
              (v16/*: any*/)
            ],
            "storageKey": "market(currency:\"USD\")"
          },
          (v16/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "767cc23cb1a8ff7acd49f1ce771f3b73",
    "id": null,
    "metadata": {},
    "name": "TokenPriceQuery",
    "operationKind": "query",
    "text": "query TokenPriceQuery(\n  $contract: ContractInput!\n  $skip1H: Boolean!\n  $skip1D: Boolean!\n  $skip1W: Boolean!\n  $skip1M: Boolean!\n  $skip1Y: Boolean!\n) {\n  tokens(contracts: [$contract]) {\n    market(currency: USD) {\n      priceHistory1H: priceHistory(duration: HOUR) @skip(if: $skip1H) {\n        timestamp\n        value\n        id\n      }\n      priceHistory1D: priceHistory(duration: DAY) @skip(if: $skip1D) {\n        timestamp\n        value\n        id\n      }\n      priceHistory1W: priceHistory(duration: WEEK) @skip(if: $skip1W) {\n        timestamp\n        value\n        id\n      }\n      priceHistory1M: priceHistory(duration: MONTH) @skip(if: $skip1M) {\n        timestamp\n        value\n        id\n      }\n      priceHistory1Y: priceHistory(duration: YEAR) @skip(if: $skip1Y) {\n        timestamp\n        value\n        id\n      }\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "9011427ffca15c23510e8366d6150045";

export default node;
