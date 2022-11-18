/**
 * @generated SignedSource<<937e2856cd15350afe8f5f6fe217311a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Chain = "ARBITRUM" | "CELO" | "ETHEREUM" | "ETHEREUM_GOERLI" | "OPTIMISM" | "POLYGON" | "%future added value";
export type Currency = "ETH" | "USD" | "%future added value";
export type HistoryDuration = "DAY" | "HOUR" | "MAX" | "MONTH" | "WEEK" | "YEAR" | "%future added value";
export type ContractInput = {
  address?: string | null;
  chain: Chain;
};
export type TokenQuery$variables = {
  contract: ContractInput;
  duration: HistoryDuration;
};
export type TokenQuery$data = {
  readonly tokens: ReadonlyArray<{
    readonly address: string;
    readonly chain: Chain;
    readonly id: string;
    readonly market: {
      readonly price: {
        readonly currency: Currency | null;
        readonly value: number | null;
      } | null;
      readonly priceHigh52W: {
        readonly value: number | null;
      } | null;
      readonly priceHistory: ReadonlyArray<{
        readonly timestamp: number;
        readonly value: number | null;
      } | null> | null;
      readonly priceLow52W: {
        readonly value: number | null;
      } | null;
      readonly totalValueLocked: {
        readonly currency: Currency | null;
        readonly value: number | null;
      } | null;
      readonly volume24H: {
        readonly currency: Currency | null;
        readonly value: number | null;
      } | null;
    } | null;
    readonly name: string | null;
    readonly project: {
      readonly description: string | null;
      readonly homepageUrl: string | null;
      readonly logoUrl: string | null;
      readonly tokens: ReadonlyArray<{
        readonly address: string | null;
        readonly chain: Chain;
      }>;
      readonly twitterName: string | null;
    } | null;
    readonly symbol: string | null;
  } | null> | null;
};
export type TokenQuery = {
  response: TokenQuery$data;
  variables: TokenQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "contract"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "duration"
  }
],
v1 = [
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "chain",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "symbol",
  "storageKey": null
},
v7 = [
  {
    "kind": "Literal",
    "name": "currency",
    "value": "USD"
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "currency",
  "storageKey": null
},
v10 = [
  (v8/*: any*/),
  (v9/*: any*/)
],
v11 = [
  {
    "kind": "Variable",
    "name": "duration",
    "variableName": "duration"
  }
],
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "timestamp",
  "storageKey": null
},
v13 = [
  {
    "kind": "Literal",
    "name": "duration",
    "value": "DAY"
  }
],
v14 = {
  "kind": "Literal",
  "name": "duration",
  "value": "YEAR"
},
v15 = [
  (v14/*: any*/),
  {
    "kind": "Literal",
    "name": "highLow",
    "value": "HIGH"
  }
],
v16 = [
  (v8/*: any*/)
],
v17 = [
  (v14/*: any*/),
  {
    "kind": "Literal",
    "name": "highLow",
    "value": "LOW"
  }
],
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "homepageUrl",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "twitterName",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "logoUrl",
  "storageKey": null
},
v22 = [
  (v8/*: any*/),
  (v9/*: any*/),
  (v2/*: any*/)
],
v23 = [
  (v8/*: any*/),
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TokenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Token",
        "kind": "LinkedField",
        "name": "tokens",
        "plural": true,
        "selections": [
          {
            "kind": "RequiredField",
            "field": (v2/*: any*/),
            "action": "LOG",
            "path": "tokens.id"
          },
          (v3/*: any*/),
          {
            "kind": "RequiredField",
            "field": (v4/*: any*/),
            "action": "LOG",
            "path": "tokens.chain"
          },
          {
            "kind": "RequiredField",
            "field": (v5/*: any*/),
            "action": "LOG",
            "path": "tokens.address"
          },
          (v6/*: any*/),
          {
            "alias": null,
            "args": (v7/*: any*/),
            "concreteType": "TokenMarket",
            "kind": "LinkedField",
            "name": "market",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Amount",
                "kind": "LinkedField",
                "name": "totalValueLocked",
                "plural": false,
                "selections": (v10/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v11/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": [
                  (v12/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Amount",
                "kind": "LinkedField",
                "name": "price",
                "plural": false,
                "selections": (v10/*: any*/),
                "storageKey": null
              },
              {
                "alias": "volume24H",
                "args": (v13/*: any*/),
                "concreteType": "Amount",
                "kind": "LinkedField",
                "name": "volume",
                "plural": false,
                "selections": (v10/*: any*/),
                "storageKey": "volume(duration:\"DAY\")"
              },
              {
                "alias": "priceHigh52W",
                "args": (v15/*: any*/),
                "concreteType": "Amount",
                "kind": "LinkedField",
                "name": "priceHighLow",
                "plural": false,
                "selections": (v16/*: any*/),
                "storageKey": "priceHighLow(duration:\"YEAR\",highLow:\"HIGH\")"
              },
              {
                "alias": "priceLow52W",
                "args": (v17/*: any*/),
                "concreteType": "Amount",
                "kind": "LinkedField",
                "name": "priceHighLow",
                "plural": false,
                "selections": (v16/*: any*/),
                "storageKey": "priceHighLow(duration:\"YEAR\",highLow:\"LOW\")"
              }
            ],
            "storageKey": "market(currency:\"USD\")"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "TokenProject",
            "kind": "LinkedField",
            "name": "project",
            "plural": false,
            "selections": [
              (v18/*: any*/),
              (v19/*: any*/),
              (v20/*: any*/),
              (v21/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Token",
                "kind": "LinkedField",
                "name": "tokens",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TokenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Token",
        "kind": "LinkedField",
        "name": "tokens",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": (v7/*: any*/),
            "concreteType": "TokenMarket",
            "kind": "LinkedField",
            "name": "market",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Amount",
                "kind": "LinkedField",
                "name": "totalValueLocked",
                "plural": false,
                "selections": (v22/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v11/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": [
                  (v12/*: any*/),
                  (v8/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Amount",
                "kind": "LinkedField",
                "name": "price",
                "plural": false,
                "selections": (v22/*: any*/),
                "storageKey": null
              },
              {
                "alias": "volume24H",
                "args": (v13/*: any*/),
                "concreteType": "Amount",
                "kind": "LinkedField",
                "name": "volume",
                "plural": false,
                "selections": (v22/*: any*/),
                "storageKey": "volume(duration:\"DAY\")"
              },
              {
                "alias": "priceHigh52W",
                "args": (v15/*: any*/),
                "concreteType": "Amount",
                "kind": "LinkedField",
                "name": "priceHighLow",
                "plural": false,
                "selections": (v23/*: any*/),
                "storageKey": "priceHighLow(duration:\"YEAR\",highLow:\"HIGH\")"
              },
              {
                "alias": "priceLow52W",
                "args": (v17/*: any*/),
                "concreteType": "Amount",
                "kind": "LinkedField",
                "name": "priceHighLow",
                "plural": false,
                "selections": (v23/*: any*/),
                "storageKey": "priceHighLow(duration:\"YEAR\",highLow:\"LOW\")"
              },
              (v2/*: any*/)
            ],
            "storageKey": "market(currency:\"USD\")"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "TokenProject",
            "kind": "LinkedField",
            "name": "project",
            "plural": false,
            "selections": [
              (v18/*: any*/),
              (v19/*: any*/),
              (v20/*: any*/),
              (v21/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Token",
                "kind": "LinkedField",
                "name": "tokens",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "baa9977b6f20b6e8b19f3370df2caa8b",
    "id": null,
    "metadata": {},
    "name": "TokenQuery",
    "operationKind": "query",
    "text": "query TokenQuery(\n  $contract: ContractInput!\n  $duration: HistoryDuration!\n) {\n  tokens(contracts: [$contract]) {\n    id\n    name\n    chain\n    address\n    symbol\n    market(currency: USD) {\n      totalValueLocked {\n        value\n        currency\n        id\n      }\n      priceHistory(duration: $duration) {\n        timestamp\n        value\n        id\n      }\n      price {\n        value\n        currency\n        id\n      }\n      volume24H: volume(duration: DAY) {\n        value\n        currency\n        id\n      }\n      priceHigh52W: priceHighLow(duration: YEAR, highLow: HIGH) {\n        value\n        id\n      }\n      priceLow52W: priceHighLow(duration: YEAR, highLow: LOW) {\n        value\n        id\n      }\n      id\n    }\n    project {\n      description\n      homepageUrl\n      twitterName\n      logoUrl\n      tokens {\n        chain\n        address\n        id\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "52fa90e5ab1d27b63e58ed1e353b8fa0";

export default node;
