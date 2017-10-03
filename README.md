# bitbucket-webhook-listener

これは「BitbucketのWebhookに指定してChatworkに通知するLambda関数」です。

## How to deploy

### :octocat: STEP 1. Clone

```sh
$ git clone https://github.com/kumakura9213/bitbucket-webhook-listener.git
$ cd bitbucket-webhook-listener
$ npm install
```

### :pencil: STEP 2. Edit config

```sh
$ cd bitbucket-webhook-listener
$ cp config/.template-default.json config/default.json
$ vi config/default.json
$ cp template-env.yml env.yml
$ vi env.yml
```

### :rocket: STEP 3. Deploy to AWS

```sh
$ cd bitbucket-webhook-listener
$ ./node_modules/.bin/sls config credentials --provider aws --key XXX --secret XXX

# deploy for development
$ npm run deploy

# deploy for production
$ npm run deploy -- -s production
```

## How to cleanup

```sh
$ cd bitbucket-webhook-listener

# remove for development
$ npm run remove

# remove for production
$ npm run remove -- -s production
```

## How to test

```sh
$ cd bitbucket-webhook-listener
$ cp test/.template-env test/.env
$ vi test/.env
$ npm test
```
