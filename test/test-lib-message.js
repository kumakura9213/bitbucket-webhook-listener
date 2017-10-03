'use strict';

require('dotenv').config({ path: './test/.env' });
const assert = require('power-assert');
const { findTemplatePath, buildToStatement, buildMessageForPullrequest, buildMessageForRepo } = require('./../lib/message.js');

describe('lib/message.js', () => {

  it('findTemplatePath', () => {
    assert('template/pullrequest/created.mst' === findTemplatePath('pullrequest:created'));
    assert('' === findTemplatePath('hoge'));
  });
  it('buildToStatement', () => {
    assert('[To:9000001] Aliceさん' === buildToStatement('Alice'));
    assert('' === buildToStatement('hoge'));
  });
  it('buildMessageForPullrequest', () => {
    const body = {
      "pullrequest": {
        "type": "pullrequest",
        "description": "プルリクエスト作成!!",
        "links": {
          "decline": {
            "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/pullrequests/3/decline"
          },
          "commits": {
            "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/pullrequests/3/commits"
          },
          "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/pullrequests/3"
          },
          "comments": {
            "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/pullrequests/3/comments"
          },
          "merge": {
            "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/pullrequests/3/merge"
          },
          "html": {
            "href": "https://bitbucket.org/test-team/test-repo/pull-requests/3"
          },
          "activity": {
            "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/pullrequests/3/activity"
          },
          "diff": {
            "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/pullrequests/3/diff"
          },
          "approve": {
            "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/pullrequests/3/approve"
          },
          "statuses": {
            "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/pullrequests/3/statuses"
          }
        },
        "title": "feature/00001",
        "close_source_branch": false,
        "reviewers": [
          {
            "username": "Alice",
            "type": "user",
            "display_name": "Alice",
            "uuid": "{e8629609-1c25-43dd-8751-4d622fec96a5}",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/users/Alice"
              },
              "html": {
                "href": "https://bitbucket.org/Alice/"
              },
              "avatar": {
                "href": "https://bitbucket.org/account/Alice/avatar/32/"
              }
            }
          },
          {
            "username": "Bob",
            "type": "user",
            "display_name": "Bob",
            "uuid": "{38269c27-3a8a-43dd-8ec8-d07baaba3be5}",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/users/Bob"
              },
              "html": {
                "href": "https://bitbucket.org/Bob/"
              },
              "avatar": {
                "href": "https://bitbucket.org/account/Bob/avatar/32/"
              }
            }
          },
          {
            "username": "Chalie",
            "type": "user",
            "display_name": "Chalie",
            "uuid": "{c126c9ec-44eb-4ab3-ba91-3337f86129de}",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/users/Chalie"
              },
              "html": {
                "href": "https://bitbucket.org/Chalie/"
              },
              "avatar": {
                "href": "https://bitbucket.org/account/Chalie/avatar/32/"
              }
            }
          }
        ],
        "destination": {
          "commit": {
            "hash": "02264dbaf88e",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/commit/02264dbaf88e"
              }
            }
          },
          "branch": {
            "name": "master"
          },
          "repository": {
            "full_name": "test-team/test-repo",
            "type": "repository",
            "name": "test-repo",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo"
              },
              "html": {
                "href": "https://bitbucket.org/test-team/test-repo"
              },
              "avatar": {
                "href": "https://bitbucket.org/test-team/test-repo/avatar/32/"
              }
            },
            "uuid": "{97bdf539-be9e-4de9-8764-9f99a873519b}"
          }
        },
        "comment_count": 0,
        "id": 3,
        "source": {
          "commit": {
            "hash": "35fd6a1ecfec",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/commit/35fd6a1ecfec"
              }
            }
          },
          "branch": {
            "name": "feature/00001"
          },
          "repository": {
            "full_name": "test-team/test-repo",
            "type": "repository",
            "name": "test-repo",
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo"
              },
              "html": {
                "href": "https://bitbucket.org/test-team/test-repo"
              },
              "avatar": {
                "href": "https://bitbucket.org/test-team/test-repo/avatar/32/"
              }
            },
            "uuid": "{97bdf539-be9e-4de9-8764-9f99a873519b}"
          }
        },
        "state": "OPEN",
        "author": {
          "username": "Dave",
          "type": "user",
          "display_name": "Dave",
          "uuid": "{04ae7cc7-4aa9-42e3-8357-6da112d001a9}",
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/users/Dave"
            },
            "html": {
              "href": "https://bitbucket.org/Dave/"
            },
            "avatar": {
              "href": "https://bitbucket.org/account/Dave/avatar/32/"
            }
          }
        },
        "created_on": "2017-09-28T02:07:18.577022+00:00",
        "participants": [
          {
            "type": "participant",
            "role": "REVIEWER",
            "user": {
              "username": "Chalie",
              "type": "user",
              "display_name": "Chalie",
              "uuid": "{c126c9ec-44eb-4ab3-ba91-3337f86129de}",
              "links": {
                "self": {
                  "href": "https://api.bitbucket.org/2.0/users/Chalie"
                },
                "html": {
                  "href": "https://bitbucket.org/Chalie/"
                },
                "avatar": {
                  "href": "https://bitbucket.org/account/Chalie/avatar/32/"
                }
              }
            },
            "approved": false
          },
          {
            "type": "participant",
            "role": "REVIEWER",
            "user": {
              "username": "Bob",
              "type": "user",
              "display_name": "Bob",
              "uuid": "{38269c27-3a8a-43dd-8ec8-d07baaba3be5}",
              "links": {
                "self": {
                  "href": "https://api.bitbucket.org/2.0/users/Bob"
                },
                "html": {
                  "href": "https://bitbucket.org/Bob/"
                },
                "avatar": {
                  "href": "https://bitbucket.org/account/Bob/avatar/32/"
                }
              }
            },
            "approved": false
          },
          {
            "type": "participant",
            "role": "REVIEWER",
            "user": {
              "username": "Alice",
              "type": "user",
              "display_name": "Alice",
              "uuid": "{e8629609-1c25-43dd-8751-4d622fec96a5}",
              "links": {
                "self": {
                  "href": "https://api.bitbucket.org/2.0/users/Alice"
                },
                "html": {
                  "href": "https://bitbucket.org/Alice/"
                },
                "avatar": {
                  "href": "https://bitbucket.org/account/Alice/avatar/32/"
                }
              }
            },
            "approved": false
          }
        ],
        "reason": "",
        "updated_on": "2017-09-28T02:07:18.633311+00:00",
        "merge_commit": null,
        "closed_by": null,
        "task_count": 0
      },
      "actor": {
        "username": "Dave",
        "type": "user",
        "display_name": "Dave",
        "uuid": "{04ae7cc7-4aa9-42e3-8357-6da112d001a9}",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/users/Dave"
          },
          "html": {
            "href": "https://bitbucket.org/Dave/"
          },
          "avatar": {
            "href": "https://bitbucket.org/account/Dave/avatar/32/"
          }
        }
      },
      "repository": {
        "scm": "git",
        "website": "",
        "name": "test-repo",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo"
          },
          "html": {
            "href": "https://bitbucket.org/test-team/test-repo"
          },
          "avatar": {
            "href": "https://bitbucket.org/test-team/test-repo/avatar/32/"
          }
        },
        "project": {
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/teams/test-team/projects/test-project"
            },
            "html": {
              "href": "https://bitbucket.org/account/user/test-team/projects/test-project"
            },
            "avatar": {
              "href": "https://bitbucket.org/account/user/test-team/projects/test-project/avatar/32"
            }
          },
          "type": "project",
          "uuid": "{7769baa6-ed30-4d72-9379-1491f0977e1e}",
          "key": "test-project",
          "name": "test-project"
        },
        "full_name": "test-team/test-repo",
        "owner": {
          "username": "test-team",
          "type": "team",
          "display_name": "test-team",
          "uuid": "{132ff2c3-0da0-4d07-b481-d35f407580ed}",
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/teams/test-team"
            },
            "html": {
              "href": "https://bitbucket.org/test-team/"
            },
            "avatar": {
              "href": "https://bitbucket.org/account/test-team/avatar/32/"
            }
          }
        },
        "type": "repository",
        "is_private": true,
        "uuid": "{97bdf539-be9e-4de9-8764-9f99a873519b}"
      }
    };

    const expected = "[To:9000001] Aliceさん\n" +
      "[To:9000002] Bobさん\n" +
      "[To:9000003] Chalieさん\n" +
      "[info][title]プルリクエストが作成されました    test-team/test-repo    [feature/00001]→[master]\n" +
      "[/title]依頼者　　：Dave\n" +
      "レビュアー：Alice, Bob, Chalie\n" +
      "タイトル　：feature/00001\n" +
      "説明　　　：プルリクエスト作成!!\n" +
      "リンク　　：https://bitbucket.org/test-team/test-repo/pull-requests/3[/info]";
    assert(expected === buildMessageForPullrequest('pullrequest:created', body));
    assert.throws(
      () => {buildMessageForPullrequest('hoge', body)},
      (e) => {
        assert('Unexpected eventKey.' === e.message);
        return true;
      }
    );
  });
  it('buildMessageForRepo', () => {
    const body = {
      "push": {
        "changes": [
          {
            "forced": false,
            "old": {
              "type": "branch",
              "name": "master",
              "links": {
                "commits": {
                  "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/commits/master"
                },
                "self": {
                  "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/refs/branches/master"
                },
                "html": {
                  "href": "https://bitbucket.org/test-team/test-repo/branch/master"
                }
              },
              "target": {
                "hash": "60c2adc1839f04532a6ee2ca0e746ea5483a0b74",
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/commit/60c2adc1839f04532a6ee2ca0e746ea5483a0b74"
                  },
                  "html": {
                    "href": "https://bitbucket.org/test-team/test-repo/commits/60c2adc1839f04532a6ee2ca0e746ea5483a0b74"
                  }
                },
                "author": {
                  "raw": "Alice <alice@test.co.jp>",
                  "type": "author",
                  "user": {
                    "username": "Alice",
                    "type": "user",
                    "display_name": "Alice",
                    "uuid": "{eedc0977-fdfc-44b0-8811-6f0bda058d7d}",
                    "links": {
                      "self": {
                        "href": "https://api.bitbucket.org/2.0/users/Alice"
                      },
                      "html": {
                        "href": "https://bitbucket.org/Alice/"
                      },
                      "avatar": {
                        "href": "https://bitbucket.org/account/Alice/avatar/32/"
                      }
                    }
                  }
                },
                "parents": [
                  {
                    "type": "commit",
                    "hash": "646e9dfe1304f6530ed7cf3cb3c2419edab9123b",
                    "links": {
                      "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/commit/646e9dfe1304f6530ed7cf3cb3c2419edab9123b"
                      },
                      "html": {
                        "href": "https://bitbucket.org/test-team/test-repo/commits/646e9dfe1304f6530ed7cf3cb3c2419edab9123b"
                      }
                    }
                  }
                ],
                "date": "2017-09-25T08:55:58+00:00",
                "message": "テストコミット",
                "type": "commit"
              }
            },
            "links": {
              "commits": {
                "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/commits?include=78e6ad31de464326fddb74085c42eba99f42a604&exclude=60c2adc1839f04532a6ee2ca0e746ea5483a0b74"
              },
              "html": {
                "href": "https://bitbucket.org/test-team/test-repo/branches/compare/78e6ad31de464326fddb74085c42eba99f42a604..60c2adc1839f04532a6ee2ca0e746ea5483a0b74"
              },
              "diff": {
                "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/diff/78e6ad31de464326fddb74085c42eba99f42a604..60c2adc1839f04532a6ee2ca0e746ea5483a0b74"
              }
            },
            "truncated": false,
            "commits": [
              {
                "hash": "78e6ad31de464326fddb74085c42eba99f42a604",
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/commit/78e6ad31de464326fddb74085c42eba99f42a604"
                  },
                  "comments": {
                    "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/commit/78e6ad31de464326fddb74085c42eba99f42a604/comments"
                  },
                  "patch": {
                    "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/patch/78e6ad31de464326fddb74085c42eba99f42a604"
                  },
                  "html": {
                    "href": "https://bitbucket.org/test-team/test-repo/commits/78e6ad31de464326fddb74085c42eba99f42a604"
                  },
                  "diff": {
                    "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/diff/78e6ad31de464326fddb74085c42eba99f42a604"
                  },
                  "approve": {
                    "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/commit/78e6ad31de464326fddb74085c42eba99f42a604/approve"
                  },
                  "statuses": {
                    "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/commit/78e6ad31de464326fddb74085c42eba99f42a604/statuses"
                  }
                },
                "author": {
                  "raw": "Alice <Alice@iti-inc.co.jp>",
                  "type": "author",
                  "user": {
                    "username": "Alice",
                    "type": "user",
                    "display_name": "Alice",
                    "uuid": "{eedc0977-fdfc-44b0-8811-6f0bda058d7d}",
                    "links": {
                      "self": {
                        "href": "https://api.bitbucket.org/2.0/users/Alice"
                      },
                      "html": {
                        "href": "https://bitbucket.org/Alice/"
                      },
                      "avatar": {
                        "href": "https://bitbucket.org/account/Alice/avatar/32/"
                      }
                    }
                  }
                },
                "parents": [
                  {
                    "type": "commit",
                    "hash": "60c2adc1839f04532a6ee2ca0e746ea5483a0b74",
                    "links": {
                      "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/commit/60c2adc1839f04532a6ee2ca0e746ea5483a0b74"
                      },
                      "html": {
                        "href": "https://bitbucket.org/test-team/test-repo/commits/60c2adc1839f04532a6ee2ca0e746ea5483a0b74"
                      }
                    }
                  }
                ],
                "date": "2017-09-29T04:54:39+00:00",
                "message": "プッシュテスト",
                "type": "commit"
              }
            ],
            "created": false,
            "closed": false,
            "new": {
              "type": "branch",
              "name": "master",
              "links": {
                "commits": {
                  "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/commits/master"
                },
                "self": {
                  "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/refs/branches/master"
                },
                "html": {
                  "href": "https://bitbucket.org/test-team/test-repo/branch/master"
                }
              },
              "target": {
                "hash": "78e6ad31de464326fddb74085c42eba99f42a604",
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/commit/78e6ad31de464326fddb74085c42eba99f42a604"
                  },
                  "html": {
                    "href": "https://bitbucket.org/test-team/test-repo/commits/78e6ad31de464326fddb74085c42eba99f42a604"
                  }
                },
                "author": {
                  "raw": "Alice <Alice@iti-inc.co.jp>",
                  "type": "author",
                  "user": {
                    "username": "Alice",
                    "type": "user",
                    "display_name": "Alice",
                    "uuid": "{eedc0977-fdfc-44b0-8811-6f0bda058d7d}",
                    "links": {
                      "self": {
                        "href": "https://api.bitbucket.org/2.0/users/Alice"
                      },
                      "html": {
                        "href": "https://bitbucket.org/Alice/"
                      },
                      "avatar": {
                        "href": "https://bitbucket.org/account/Alice/avatar/32/"
                      }
                    }
                  }
                },
                "parents": [
                  {
                    "type": "commit",
                    "hash": "60c2adc1839f04532a6ee2ca0e746ea5483a0b74",
                    "links": {
                      "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo/commit/60c2adc1839f04532a6ee2ca0e746ea5483a0b74"
                      },
                      "html": {
                        "href": "https://bitbucket.org/test-team/test-repo/commits/60c2adc1839f04532a6ee2ca0e746ea5483a0b74"
                      }
                    }
                  }
                ],
                "date": "2017-09-29T04:54:39+00:00",
                "message": "プッシュテスト",
                "type": "commit"
              }
            }
          }
        ]
      },
      "actor": {
        "username": "Alice",
        "type": "user",
        "display_name": "Alice",
        "uuid": "{eedc0977-fdfc-44b0-8811-6f0bda058d7d}",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/users/Alice"
          },
          "html": {
            "href": "https://bitbucket.org/Alice/"
          },
          "avatar": {
            "href": "https://bitbucket.org/account/Alice/avatar/32/"
          }
        }
      },
      "repository": {
        "scm": "git",
        "website": "",
        "name": "test-repo",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/test-team/test-repo"
          },
          "html": {
            "href": "https://bitbucket.org/test-team/test-repo"
          },
          "avatar": {
            "href": "https://bitbucket.org/test-team/test-repo/avatar/32/"
          }
        },
        "project": {
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/teams/test-team/projects/test-project"
            },
            "html": {
              "href": "https://bitbucket.org/account/user/test-team/projects/test-project"
            },
            "avatar": {
              "href": "https://bitbucket.org/account/user/test-team/projects/test-project/avatar/32"
            }
          },
          "type": "project",
          "uuid": "{7769baa6-ed30-4d72-9379-1491f0977e1e}",
          "key": "test-project",
          "name": "test-project"
        },
        "full_name": "test-team/test-repo",
        "owner": {
          "username": "test-team",
          "type": "team",
          "display_name": "test-team",
          "uuid": "{132ff2c3-0da0-4d07-b481-d35f407580ed}",
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/teams/test-team"
            },
            "html": {
              "href": "https://bitbucket.org/test-team/"
            },
            "avatar": {
              "href": "https://bitbucket.org/account/test-team/avatar/32/"
            }
          }
        },
        "type": "repository",
        "is_private": true,
        "uuid": "{6df8eae1-91a3-4db9-8884-09383b413b27}"
      }
    };
    const expected = "[info][title]リポジトリにプッシュされました    test-team/test-repo    master[78e6ad31de464326fddb74085c42eba99f42a604]\n" +
      "[/title]作成者　　：Alice\n" +
      "メッセージ：プッシュテスト\n" +
      "リンク　　：https://bitbucket.org/test-team/test-repo/branch/master[/info]";
    assert(expected === buildMessageForRepo('repo:push', body));
    assert.throws(
      () => {buildMessageForRepo('hoge', body)},
      (e) => {
        assert('Unexpected eventKey.' === e.message);
        return true;
      }
    );
  });
});
