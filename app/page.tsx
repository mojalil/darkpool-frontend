'use client';

import { useState } from 'react'
import { ArrowRight, Wallet, EyeOff, Lock, Rocket } from 'lucide-react'
import { Button } from "@/components/ui/button"
import TradingDashboard from './TradingDashboard'

const WelcomeScreen = ({ onNext }: { onNext: () => void }) => (
  <div className="text-center">
    <h2 className="text-3xl font-bold mb-4">Welcome to DarkNode</h2>
    <div className="w-24 h-24 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
      <EyeOff size={48} />
    </div>
    <p className="mb-6">Your gateway to private, decentralized trading. Secure, discreet, and truly peer-to-peer.</p>
    <Button onClick={onNext}>Enter the Dark DEX <ArrowRight className="ml-2" size={16} /></Button>
  </div>
)

const ConnectWalletScreen = ({ onNext }: { onNext: () => void }) => (
  <div className="text-center">
    <h2 className="text-2xl font-bold mb-6">Connect Your Secure Wallet</h2>
    <div className="space-y-4 mb-6">
      <Button className="w-full" onClick={onNext}>
        <Wallet className="mr-2" size={20} /> Connect MetaMask
      </Button>
      <Button className="w-full" variant="outline" onClick={onNext}>
        Connect Hardware Wallet
      </Button>
    </div>
    <p className="text-sm text-gray-400">
      New to decentralized dark pools? <a href="#" className="text-primary">Learn about our security measures</a>
    </p>
  </div>
)

const DarkNodeExplanationScreen = ({ onNext }: { onNext: () => void }) => (
  <div className="text-center">
    <h2 className="text-2xl font-bold mb-6">How DarkNode Works</h2>
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2">
          <Wallet size={32} className="text-primary" />
        </div>
        <p className="text-sm">Connect Wallet</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2">
          <EyeOff size={32} className="text-primary" />
        </div>
        <p className="text-sm">Private Orders</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2">
          <Lock size={32} className="text-primary" />
        </div>
        <p className="text-sm">Secure Swaps</p>
      </div>
    </div>
    <p className="text-sm text-gray-400 mb-6">
      DarkNode combines the privacy of dark pools with the decentralization of DEXs for secure, anonymous trading.
    </p>
    <Button onClick={onNext}>Next <ArrowRight className="ml-2" size={16} /></Button>
  </div>
)

const TokenSelectionScreen = ({ onNext }: { onNext: () => void }) => (
  <div>
    <h2 className="text-2xl font-bold mb-6 text-center">Select Your Tokens</h2>
    <div className="grid grid-cols-2 gap-4 mb-6">
      {['ETH', 'WBTC', 'DAI', 'USDC', 'LINK', 'UNI'].map((token) => (
        <Button key={token} variant="outline" className="h-20">
          {token}
        </Button>
      ))}
    </div>
    <p className="text-sm text-gray-400 mb-4 text-center">
      These tokens are available for private, decentralized trading on DarkNode.
    </p>
    <Button onClick={onNext} className="w-full">Continue</Button>
  </div>
)

const FinalScreen = ({ onFinish }: { onFinish: () => void }) => (
  <div className="text-center">
    <h2 className="text-2xl font-bold mb-4">You&apos;re Set for Private DEX Trading</h2>
    <div className="w-24 h-24 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
      <Rocket size={48} />
    </div>
    <p className="mb-6">Ready to experience the power of decentralized dark pool trading?</p>
    <Button onClick={onFinish} size="lg">Start Trading</Button>
  </div>
)

export default function OnboardingFlow() {
  const [step, setStep] = useState(0)
  const [onboardingComplete, setOnboardingComplete] = useState(false)

  const nextStep = () => setStep(step + 1)
  const finish = () => setOnboardingComplete(true)

  const steps = [
    <WelcomeScreen key="welcome" onNext={nextStep} />,
    <ConnectWalletScreen key="connect" onNext={nextStep} />,
    <DarkNodeExplanationScreen key="explain" onNext={nextStep} />,
    <TokenSelectionScreen key="tokens" onNext={nextStep} />,
    <FinalScreen key="final" onFinish={finish} />
  ]

  if (onboardingComplete) {
    return <TradingDashboard />
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-xl">
        {steps[step]}
      </div>
    </div>
  )
}