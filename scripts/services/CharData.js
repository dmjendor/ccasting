window.angular.module('castingApp.services.CharData', [])
    .factory('CharData', ['$q', function($q) {
        'use strict';

        var sharedData = {
            debug: false,
            showRolls: false,
            generateFull: true,
            age: 0,
            cuMod: 0,
            solMod: 0,
            legitMod: 0,
            biMod: 0,
            tiMod: 0,
            imprisoned: 0,
            enslaved: 0,
            survival: null,
            family: {
                name: null,
                desc: null,
                roll: 0,
                tbl: null,
                siblings: []
            },
            birth: {
                order: {
                    name: null,
                    desc: null,
                    roll: 0,
                    tbl: null
                },
                time: {
                    name: null,
                    desc: null,
                    roll: 0,
                    tbl: null
                },
                place: {
                    items:[]
                },
                events: {
                    items: []

                }
            },
            childhood:{
                apprenticeship:[],
                events: {
                    items: []
                }
            },
            adulthood:{
                jobs:[],
                events: {
                    items: []
                }
            },
            legitimacy: {
                name: null,
                desc: null,
                roll: 0,
                tbl: null,
                lRoll: 0,
                items: []
            },
            attitude:{
                traits: {
                    lightCount: 0,
                    darkCount: 0,
                    neutralCount: 0,
                    lightSide: {
                        items: []
                    },
                    darkSide: {
                        items: []
                    },
                    neutral: {
                        items: []
                    },
                    exotic: {
                        items: []
                    }
                }
            },
            race: {
                name: null,
                desc: null,
                roll: 0,
                tbl: null,
                items:[]
            },
            culture: {
                native: null,
                level: null,
                desc: null,
                roll: 0,
                tbl: null,
                items:[]
            },
            parent: {
                status : {
                    level: null,
                    name: '',
                    roll: 0
                },
                desc: null,
                roll: 0,
                tbl: null,
                items: [],
                land: {
                    titleCount: 0,
                    titleDice: null,
                    titles: [],
                    holdPct: 0,
                    size: 0,
                    sizeDice: null
                },
                jobs: {
                    head: {
                        items: []
                    },
                    parent1: {
                        items: []
                    },
                    parent2: {
                        items: []
                    }
                },
                military: {
                    rank: {
                        name: null,
                        number: 0,
                        roll: 0
                    },
                    serviceOf: {
                        name: null,
                        number: 0,
                        roll: 0
                    },
                    events: {
                        items: []
                    }
                },
                noteWorthy: {
                    count: 0,
                    items: []
                },
                underworld: {
                    count: 0,
                    events: {
                        items: []
                    }
                }
            },
            military: {
                rank: {
                    name: null,
                    number: 0,
                    roll: 0
                },
                skills: {
                },
                serviceOf: {
                    name: null,
                    number: 0,
                    roll: 0
                },
                events: {
                    items: []
                }
            },
            special:{
                blessings: {
                    items: []
                },
                curses: {
                    items: []
                },
                psychic: {
                    items: []
                },
                tragedies: {
                    items: []
                },
                wonderful: {
                    items: []
                },
                pets: {
                    items: []
                },
                hobbies: {
                    items: []
                },
                enslaved: {
                    items: []
                },
                imprisoned: {
                    items: []
                },
                religious: {
                    items: []
                },
                love: {
                    items: []
                },
                service: {
                    items: []
                },
                exotic: {
                    items: []
                },
                death: {
                    items: []
                },


            },
            criminal: {
                underworld: {
                    items: []
                }
            }
        };

        function ClearAll() {
            return {
                debug: false,
                showRolls: false,
                generateFull: true,
                age: 0,
                cuMod: 0,
                solMod: 0,
                legitMod: 0,
                biMod: 0,
                tiMod: 0,
                imprisoned: 0,
                enslaved: 0,
                survival: null,
                family: {
                    name: null,
                    desc: null,
                    roll: 0,
                    tbl: null,
                    siblings: []
                },
                birth: {
                    order: {
                        name: null,
                        desc: null,
                        roll: 0,
                        tbl: null
                    },
                    time: {
                        name: null,
                        desc: null,
                        roll: 0,
                        tbl: null
                    },
                    place: {
                        items: []
                    },
                    events: {
                        items: []
                    }
                },
                childhood: {
                    apprenticeship: [],
                    events: {
                        items: []
                    }
                },
                adulthood: {
                    jobs: [],
                    events: {
                        items: []
                    }
                },
                legitimacy: {
                    name: null,
                    desc: null,
                    roll: 0,
                    tbl: null,
                    lRoll: 0,
                    items: []
                },
                attitude: {
                    traits: {
                        lightCount: 0,
                        darkCount: 0,
                        neutralCount: 0,
                        lightSide: {
                            items: []
                        },
                        darkSide: {
                            items: []
                        },
                        neutral: {
                            items: []
                        },
                        exotic: {
                            items: []
                        }
                    }
                },
                race: {
                    name: null,
                    desc: null,
                    roll: 0,
                    tbl: null,
                    items: []
                },
                culture: {
                    native: null,
                    level: null,
                    desc: null,
                    roll: 0,
                    tbl: null,
                    items: []
                },
                parent: {
                    status: {
                        level: null,
                        name: '',
                        roll: 0
                    },
                    desc: null,
                    roll: 0,
                    tbl: null,
                    items: [],
                    land: {
                        titleCount: 0,
                        titleDice: null,
                        titles: [],
                        holdPct: 0,
                        size: 0,
                        sizeDice: null
                    },
                    jobs: {
                        head: {
                            items: []
                        },
                        parent1: {
                            items: []
                        },
                        parent2: {
                            items: []
                        }
                    },
                    military: {
                        rank: {
                            name: null,
                            number: 0,
                            roll: 0
                        },
                        serviceOf: {
                            name: null,
                            number: 0,
                            roll: 0
                        },
                        events: {
                            items: []
                        }
                    },
                    noteWorthy: {
                        count: 0,
                        items: []
                    },
                    underworld: {
                        count: 0,
                        events: {
                            items: []
                        }
                    }
                },
                military: {
                    rank: {
                        name: null,
                        number: 0,
                        roll: 0
                    },
                    skills: {},
                    serviceOf: {
                        name: null,
                        number: 0,
                        roll: 0
                    },
                    events: {
                        items: []
                    }
                },
                special: {
                    blessings: {
                        items: []
                    },
                    curses: {
                        items: []
                    },
                    psychic: {
                        items: []
                    },
                    tragedies: {
                        items: []
                    },
                    wonderful: {
                        items: []
                    },
                    pets: {
                        items: []
                    },
                    hobbies: {
                        items: []
                    },
                    enslaved: {
                        items: []
                    },
                    imprisoned: {
                        items: []
                    },
                    religious: {
                        items: []
                    },
                    love: {
                        items: []
                    },
                    service: {
                        items: []
                    },
                    exotic: {
                        items: []
                    },
                    death: {
                        items: []
                    }


                },
                criminal: {
                    underworld: {
                        items: []
                    }
                }
            }
        }

		function ClearParent(){
			return {
				status : {
					level: null,
					name: '',
					roll: 0
				},
				desc: null,
				roll: 0,
				tbl: null,
				items: [],
				land: {
					titleCount: 0,
					titleDice: null,
					titles: [],
					holdPct: 0,
					size: 0,
					sizeDice: null
				},
				jobs: {
					head: {
						items: []
					},
					parent1: {
						items: []
					},
					parent2: {
						items: []
					}
				},
				military: {
					rank: {
						name: null,
						number: 0,
						roll: 0
					},
					serviceOf: {
						name: null,
						number: 0,
						roll: 0
					},
					events: {
						items: []
					}
				},
				noteWorthy: {
					count: 0,
					items: []
				},
				underworld: {
					count: 0,
					events: {
						items: []
					}
				}
			}
		}

		function ClearJobs(){
			return {
				head: {
					items: []
				},
				parent1: {
					items: []
				},
				parent2: {
					items: []
				}
			}
		}

		function ClearMilitary(){
			return {
				rank: {
					name: null,
					number: 0,
					roll: 0
				},
				serviceOf: {
					name: null,
					number: 0,
					roll: 0
				},
				events: {
					items: []
				}
			}
		}

		function ClearLand(){
			return {
				titleCount: 0,
				titleDice: null,
				titles: [],
				holdPct: 0,
				holdResult: 0,
				sizeDice: null,
				size: 0
			}
		}

		function ClearCulture(){
			return {
				native: null,
				level: null,
				desc: null,
				roll: 0,
				tbl: null,
				items:[]
			}
		}

		function ClearLegitimacy(){
			return {
				name: null,
				desc: null,
				roll: 0,
				tbl: null,
				lRoll: 0,
				items: []
			}
		}

		function ClearTraits(){
			return {
				lightCount: 0,
				darkCount: 0,
				neutralCount: 0,
				lightSide: {
					items: []
				},
				darkSide: {
					items: []
				},
				neutral: {
					items: []
				},
				exotic: {
					items: []
				}
			}
		}

		function ClearStatus(){
			return {
				level: null,
				name: '',
				roll: 0
			}
		}

		function ClearParentUnderworld(){
			return {
				count: 0,
				events: {
					items: []
				}
			}
		}

		function ClearFamily(){
			return {
				name: null,
				desc: null,
				roll: 0,
				tbl: null,
				siblings: []
			}
		}

		function ClearBirth(){
			return {
				order: {
					name: null,
					desc: null,
					roll: 0,
					tbl: null
				},
				time: {
					name: null,
					desc: null,
					roll: 0,
					tbl: null
				},
				place: {
					items:[]
				},
				events: {
					items: []
				}
			}
		}

		function ClearItemsList(){
			return {
				items: []
			}
		}

		return {
			Character:sharedData,
			initTraits: ClearTraits,
			initCulture: ClearCulture,
			initStatus: ClearStatus,
			initLand: ClearLand,
			initMilitary: ClearMilitary,
			initLegitimacy: ClearLegitimacy,
			initJobs: ClearJobs,
			initParent: ClearParent,
			initParentUnderworld: ClearParentUnderworld,
			initFamily: ClearFamily,
			initBirth: ClearBirth,
			initItemsList: ClearItemsList,
			initAll: ClearAll
		}
	}]);
