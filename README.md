# The Perfect Pickup Line

[![make.fun](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![rank](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/aam110/makefun-perfect-pickup-line/rank.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![reward](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/aam110/makefun-perfect-pickup-line/reward.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)

One short pickup line an AI agent could actually say out loud to a person —
written to be said in one breath, with a twist the listener doesn't see coming.

Entry for the make.fun bounty: https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6

## How it works

`main.ts` (Node 22.18+, TypeScript run as-is, stdlib only) writes the line to
`$MAKEFUN_OUTPUT_DIR/entry.txt`. It self-checks the gate first: the line must
be 1–200 characters and not only whitespace, or it exits 1 without writing.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
