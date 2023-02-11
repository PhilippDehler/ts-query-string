import { QueryValue, ResolveableQueryValue } from "./types";
/**
 * Builds a query string by adding query values one by one
 * @template T
 * @param {T} [nameValues=[]] - The initial list of query values
 * @returns {Object} The query string builder object
 * @property {Array<QueryValue>} nameValues - The list of query values
 * @property {function(Object): QueryStringBuilder<[...T, typeof input]>} add - Adds a query value to the list
 * @property {function(): EncodeQueryString<T>} build - Builds and returns the final query string
 */
export declare function QueryStringBuilder<T extends QueryValue[]>(nameValues?: T): {
    nameValues: T;
    /**
     * Adds a query value to the list
     * @template Name
     * @template Value
     * @param {Object} input - The query value to add
     * @param {Name} input.name - The name of the query value
     * @param {Value} input.value - The value of the query value
     * @returns {QueryStringBuilder<[...T, typeof input]>} The updated query string builder
     */
    add: <Name extends string, Value extends ResolveableQueryValue>(input: {
        name: Name;
        value: Value;
    }) => {
        nameValues: [...T, {
            name: Name;
            value: Value;
        }];
        add: <Name_1 extends string, Value_1 extends ResolveableQueryValue>(input: {
            name: Name_1;
            value: Value_1;
        }) => {
            nameValues: [...T, {
                name: Name;
                value: Value;
            }, {
                name: Name_1;
                value: Value_1;
            }];
            add: <Name_2 extends string, Value_2 extends ResolveableQueryValue>(input: {
                name: Name_2;
                value: Value_2;
            }) => {
                nameValues: [...T, {
                    name: Name;
                    value: Value;
                }, {
                    name: Name_1;
                    value: Value_1;
                }, {
                    name: Name_2;
                    value: Value_2;
                }];
                add: <Name_3 extends string, Value_3 extends ResolveableQueryValue>(input: {
                    name: Name_3;
                    value: Value_3;
                }) => {
                    nameValues: [...T, {
                        name: Name;
                        value: Value;
                    }, {
                        name: Name_1;
                        value: Value_1;
                    }, {
                        name: Name_2;
                        value: Value_2;
                    }, {
                        name: Name_3;
                        value: Value_3;
                    }];
                    add: <Name_4 extends string, Value_4 extends ResolveableQueryValue>(input: {
                        name: Name_4;
                        value: Value_4;
                    }) => {
                        nameValues: [...T, {
                            name: Name;
                            value: Value;
                        }, {
                            name: Name_1;
                            value: Value_1;
                        }, {
                            name: Name_2;
                            value: Value_2;
                        }, {
                            name: Name_3;
                            value: Value_3;
                        }, {
                            name: Name_4;
                            value: Value_4;
                        }];
                        add: <Name_5 extends string, Value_5 extends ResolveableQueryValue>(input: {
                            name: Name_5;
                            value: Value_5;
                        }) => {
                            nameValues: [...T, {
                                name: Name;
                                value: Value;
                            }, {
                                name: Name_1;
                                value: Value_1;
                            }, {
                                name: Name_2;
                                value: Value_2;
                            }, {
                                name: Name_3;
                                value: Value_3;
                            }, {
                                name: Name_4;
                                value: Value_4;
                            }, {
                                name: Name_5;
                                value: Value_5;
                            }];
                            add: <Name_6 extends string, Value_6 extends ResolveableQueryValue>(input: {
                                name: Name_6;
                                value: Value_6;
                            }) => {
                                nameValues: [...T, {
                                    name: Name;
                                    value: Value;
                                }, {
                                    name: Name_1;
                                    value: Value_1;
                                }, {
                                    name: Name_2;
                                    value: Value_2;
                                }, {
                                    name: Name_3;
                                    value: Value_3;
                                }, {
                                    name: Name_4;
                                    value: Value_4;
                                }, {
                                    name: Name_5;
                                    value: Value_5;
                                }, {
                                    name: Name_6;
                                    value: Value_6;
                                }];
                                add: <Name_7 extends string, Value_7 extends ResolveableQueryValue>(input: {
                                    name: Name_7;
                                    value: Value_7;
                                }) => {
                                    nameValues: [...T, {
                                        name: Name;
                                        value: Value;
                                    }, {
                                        name: Name_1;
                                        value: Value_1;
                                    }, {
                                        name: Name_2;
                                        value: Value_2;
                                    }, {
                                        name: Name_3;
                                        value: Value_3;
                                    }, {
                                        name: Name_4;
                                        value: Value_4;
                                    }, {
                                        name: Name_5;
                                        value: Value_5;
                                    }, {
                                        name: Name_6;
                                        value: Value_6;
                                    }, {
                                        name: Name_7;
                                        value: Value_7;
                                    }];
                                    add: <Name_8 extends string, Value_8 extends ResolveableQueryValue>(input: {
                                        name: Name_8;
                                        value: Value_8;
                                    }) => {
                                        nameValues: [...T, {
                                            name: Name;
                                            value: Value;
                                        }, {
                                            name: Name_1;
                                            value: Value_1;
                                        }, {
                                            name: Name_2;
                                            value: Value_2;
                                        }, {
                                            name: Name_3;
                                            value: Value_3;
                                        }, {
                                            name: Name_4;
                                            value: Value_4;
                                        }, {
                                            name: Name_5;
                                            value: Value_5;
                                        }, {
                                            name: Name_6;
                                            value: Value_6;
                                        }, {
                                            name: Name_7;
                                            value: Value_7;
                                        }, {
                                            name: Name_8;
                                            value: Value_8;
                                        }];
                                        add: <Name_9 extends string, Value_9 extends ResolveableQueryValue>(input: {
                                            name: Name_9;
                                            value: Value_9;
                                        }) => {
                                            nameValues: [...T, {
                                                name: Name;
                                                value: Value;
                                            }, {
                                                name: Name_1;
                                                value: Value_1;
                                            }, {
                                                name: Name_2;
                                                value: Value_2;
                                            }, {
                                                name: Name_3;
                                                value: Value_3;
                                            }, {
                                                name: Name_4;
                                                value: Value_4;
                                            }, {
                                                name: Name_5;
                                                value: Value_5;
                                            }, {
                                                name: Name_6;
                                                value: Value_6;
                                            }, {
                                                name: Name_7;
                                                value: Value_7;
                                            }, {
                                                name: Name_8;
                                                value: Value_8;
                                            }, {
                                                name: Name_9;
                                                value: Value_9;
                                            }];
                                            add: <Name_10 extends string, Value_10 extends ResolveableQueryValue>(input: {
                                                name: Name_10;
                                                value: Value_10;
                                            }) => any;
                                            /**
                                             * Build the query string from the name-value pairs.
                                             *
                                             * @returns The query string representation of the name-value pairs.
                                             */
                                            build: () => import("./literalEncoder").EncodeQueryString<[...T, {
                                                name: Name;
                                                value: Value;
                                            }, {
                                                name: Name_1;
                                                value: Value_1;
                                            }, {
                                                name: Name_2;
                                                value: Value_2;
                                            }, {
                                                name: Name_3;
                                                value: Value_3;
                                            }, {
                                                name: Name_4;
                                                value: Value_4;
                                            }, {
                                                name: Name_5;
                                                value: Value_5;
                                            }, {
                                                name: Name_6;
                                                value: Value_6;
                                            }, {
                                                name: Name_7;
                                                value: Value_7;
                                            }, {
                                                name: Name_8;
                                                value: Value_8;
                                            }, {
                                                name: Name_9;
                                                value: Value_9;
                                            }]>;
                                        };
                                        /**
                                         * Build the query string from the name-value pairs.
                                         *
                                         * @returns The query string representation of the name-value pairs.
                                         */
                                        build: () => import("./literalEncoder").EncodeQueryString<[...T, {
                                            name: Name;
                                            value: Value;
                                        }, {
                                            name: Name_1;
                                            value: Value_1;
                                        }, {
                                            name: Name_2;
                                            value: Value_2;
                                        }, {
                                            name: Name_3;
                                            value: Value_3;
                                        }, {
                                            name: Name_4;
                                            value: Value_4;
                                        }, {
                                            name: Name_5;
                                            value: Value_5;
                                        }, {
                                            name: Name_6;
                                            value: Value_6;
                                        }, {
                                            name: Name_7;
                                            value: Value_7;
                                        }, {
                                            name: Name_8;
                                            value: Value_8;
                                        }]>;
                                    };
                                    /**
                                     * Build the query string from the name-value pairs.
                                     *
                                     * @returns The query string representation of the name-value pairs.
                                     */
                                    build: () => import("./literalEncoder").EncodeQueryString<[...T, {
                                        name: Name;
                                        value: Value;
                                    }, {
                                        name: Name_1;
                                        value: Value_1;
                                    }, {
                                        name: Name_2;
                                        value: Value_2;
                                    }, {
                                        name: Name_3;
                                        value: Value_3;
                                    }, {
                                        name: Name_4;
                                        value: Value_4;
                                    }, {
                                        name: Name_5;
                                        value: Value_5;
                                    }, {
                                        name: Name_6;
                                        value: Value_6;
                                    }, {
                                        name: Name_7;
                                        value: Value_7;
                                    }]>;
                                };
                                /**
                                 * Build the query string from the name-value pairs.
                                 *
                                 * @returns The query string representation of the name-value pairs.
                                 */
                                build: () => import("./literalEncoder").EncodeQueryString<[...T, {
                                    name: Name;
                                    value: Value;
                                }, {
                                    name: Name_1;
                                    value: Value_1;
                                }, {
                                    name: Name_2;
                                    value: Value_2;
                                }, {
                                    name: Name_3;
                                    value: Value_3;
                                }, {
                                    name: Name_4;
                                    value: Value_4;
                                }, {
                                    name: Name_5;
                                    value: Value_5;
                                }, {
                                    name: Name_6;
                                    value: Value_6;
                                }]>;
                            };
                            /**
                             * Build the query string from the name-value pairs.
                             *
                             * @returns The query string representation of the name-value pairs.
                             */
                            build: () => import("./literalEncoder").EncodeQueryString<[...T, {
                                name: Name;
                                value: Value;
                            }, {
                                name: Name_1;
                                value: Value_1;
                            }, {
                                name: Name_2;
                                value: Value_2;
                            }, {
                                name: Name_3;
                                value: Value_3;
                            }, {
                                name: Name_4;
                                value: Value_4;
                            }, {
                                name: Name_5;
                                value: Value_5;
                            }]>;
                        };
                        /**
                         * Build the query string from the name-value pairs.
                         *
                         * @returns The query string representation of the name-value pairs.
                         */
                        build: () => import("./literalEncoder").EncodeQueryString<[...T, {
                            name: Name;
                            value: Value;
                        }, {
                            name: Name_1;
                            value: Value_1;
                        }, {
                            name: Name_2;
                            value: Value_2;
                        }, {
                            name: Name_3;
                            value: Value_3;
                        }, {
                            name: Name_4;
                            value: Value_4;
                        }]>;
                    };
                    /**
                     * Build the query string from the name-value pairs.
                     *
                     * @returns The query string representation of the name-value pairs.
                     */
                    build: () => import("./literalEncoder").EncodeQueryString<[...T, {
                        name: Name;
                        value: Value;
                    }, {
                        name: Name_1;
                        value: Value_1;
                    }, {
                        name: Name_2;
                        value: Value_2;
                    }, {
                        name: Name_3;
                        value: Value_3;
                    }]>;
                };
                /**
                 * Build the query string from the name-value pairs.
                 *
                 * @returns The query string representation of the name-value pairs.
                 */
                build: () => import("./literalEncoder").EncodeQueryString<[...T, {
                    name: Name;
                    value: Value;
                }, {
                    name: Name_1;
                    value: Value_1;
                }, {
                    name: Name_2;
                    value: Value_2;
                }]>;
            };
            /**
             * Build the query string from the name-value pairs.
             *
             * @returns The query string representation of the name-value pairs.
             */
            build: () => import("./literalEncoder").EncodeQueryString<[...T, {
                name: Name;
                value: Value;
            }, {
                name: Name_1;
                value: Value_1;
            }]>;
        };
        /**
         * Build the query string from the name-value pairs.
         *
         * @returns The query string representation of the name-value pairs.
         */
        build: () => import("./literalEncoder").EncodeQueryString<[...T, {
            name: Name;
            value: Value;
        }]>;
    };
    /**
     * Build the query string from the name-value pairs.
     *
     * @returns The query string representation of the name-value pairs.
     */
    build: () => import("./literalEncoder").EncodeQueryString<T>;
};
