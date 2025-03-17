import { Keypair } from "@solana/web3.js";
import { ethers } from "ethers";
import bip39 from "bip39";
import bs58 from "bs58";
import { derivePath } from "ed25519-hd-key";

const generateWallet = async () => {
  const mnemonic = bip39.generateMnemonic();

  const seed = bip39.mnemonicToSeedSync(mnemonic);

  const solanaPath = "m/44'/501'/0'/0'";
  const derivedSeed = derivePath(solanaPath, seed.toString("hex")).key;
  const solanaKeypair = Keypair.fromSeed(derivedSeed);
  const solanaPublicKey = solanaKeypair.publicKey.toBase58();
  const solanaPrivateKey = bs58.encode(Buffer.from(solanaKeypair.secretKey));

  const ethWallet = ethers.Wallet.fromPhrase(mnemonic);
  const ethAddress = ethWallet.address;
  const ethPrivateKey = ethWallet.privateKey;

  return {
    mnemonic,
    solana: {
      publicKey: solanaPublicKey,
      privateKey: solanaPrivateKey,
    },
    ethereum: {
      address: ethAddress,
      privateKey: ethPrivateKey,
    },
  };
};

export default generateWallet;
