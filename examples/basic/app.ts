import TsSdk from '../../src/typescript-sdk.ts'

const addResult = TsSdk.add(1, 2)
document.querySelector('.result').innerText = addResult
