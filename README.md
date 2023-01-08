Novamarket
=================


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/novamarket.svg)](https://npmjs.org/package/novamarket)
[![Downloads/week](https://img.shields.io/npm/dw/novamarket.svg)](https://npmjs.org/package/novamarket)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g novamarket
$ novamarket COMMAND
running command...
$ novamarket (--version)
novamarket/0.0.6 darwin-x64 node-v16.13.1
$ novamarket --help [COMMAND]
USAGE
  $ novamarket COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`novamarket help [COMMAND]`](#novamarket-help-command)
* [`novamarket history ITEMID`](#novamarket-history-itemid)
* [`novamarket live ITEMID`](#novamarket-live-itemid)

## `novamarket help [COMMAND]`

Display help for novamarket.

```
USAGE
  $ novamarket help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for novamarket.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `novamarket history ITEMID`

Check transaction history of an item

```
USAGE
  $ novamarket history [ITEMID] [-t <value>] [-f <value>]

ARGUMENTS
  ITEMID  Id of the item to search

FLAGS
  -f, --filter=<value>  filter properties i.e novamarket history [itemid] -f refine=9
  -t, --top=<value>     [default: 10] top

DESCRIPTION
  Check transaction history of an item

EXAMPLES
  $ novamarket history 6635
```

_See code: [dist/commands/history.ts](https://github.com/judedaryl/novamarket/blob/v0.0.6/dist/commands/history.ts)_

## `novamarket live ITEMID`

Check live market data of an item

```
USAGE
  $ novamarket live [ITEMID] [-t <value>] [-f <value>]

ARGUMENTS
  ITEMID  Id of the item to search

FLAGS
  -f, --filter=<value>  filter properties i.e novamarket live [itemid] -f refine=9
  -t, --top=<value>     [default: 10] top

DESCRIPTION
  Check live market data of an item

EXAMPLES
  $ novamarket live 6635
```

_See code: [dist/commands/live.ts](https://github.com/judedaryl/novamarket/blob/v0.0.6/dist/commands/live.ts)_
<!-- commandsstop -->
