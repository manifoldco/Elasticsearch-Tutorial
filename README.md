##Leveraging the Power of Elasticsearch: Autocomplete and Fuzzy Search

I’m going to show you how to build a simple search with autocomplete and fuzziness using Manifold, Express and deploying to Zeit. We will be building a simple webpage that allows users to search for football players and display their details.

This tutorial will showcase some of the awesome of Elasticsearch, but before we continue, we need to understand what autocomplete, fuzziness and Elasticsearch is. 

###Introduction

Autocomplete means giving users the option of completing words or forms by a shorthand method on the basis of what has been typed before. Pretty straightforward!

Fuzziness in the context of this article, means finding words that are resembling or similar by editing a character or more. There are four ways of finding fuzzily similar words: substitution, insertion, transposition and deletion. For example:

1. Substitute r for n: clea_r_ → clea_n_

2. Insert k after c: tic → tic_k_

3. Transpose a and e: b_ae_ver → b_ea_ver

4. Delete r: po_r_t → pot

Elasticsearch is an open-source, broadly-distributable, readily-scalable, really fast RESTful search and analytics engine. Accessible through an extensive and elaborate API, Elasticsearch can power extremely fast searches that support your data discovery applications.

If you don’t have any idea about Elasticsearch or Express, you should be able to follow the tutorial, however, I will recommend catching up:

- [Express.js documentation]()

- [Elasticsearch documentation]()

We are good to go!

###Set up

We will use Manifold to create our elasticsearch instance and logging. Manifold takes away the pain of creating multiple accounts, setting up payment and tracking across multiple platforms. If you don’t have a Manifold account, [head over and create one](), it is very easy to set up.

Once you’ve logged in, you will be able to create resources by clicking on `Create Resource` button.

![insert image]()

For this tutorial, we will using Bonsai Elasticsearch and LogDNA, so go ahead and provision both services. This will create a new Bonsai Elasticsearch and LogDNA accounts straight from your Manifold account. Awesome!

To get your credentials, click on `Export all credentials` button

![insert image]()

This will reveal a modal box with your credentials, copy them by clicking on `Copy to clipboard`

![insert image]()

Create a `.env` file in your project root folder and paste our credentials for both Elasticsearch and LogDNA

```
BONSAI_URL=https://gbqry85ceb:tpnviecbfm@2684hm2qnadtky7fyq7nudv9zh7qm.us-east-1.bonsaisearch.net
LOGDNA_KEY=51a6c243ca7a47b685bf0bc6fad89c7c

```

###Installing Node packages

Before we proceeding, ensure you have node and npm installed. Next, create a `package.json` file in your project root folder using `npm init`. Then open your terminal and run this:

```
npm install --save elasticsearch express logdna node-env-file pug nodemon
```

