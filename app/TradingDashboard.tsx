'use client'

import React from 'react'
import { useState } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Card, CardContent } from "../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
import { ArrowLeftRight, ChevronDown } from 'lucide-react'

export default function TradingDashboard() {
  const [amount, setAmount] = useState('')
  const [selectedToken, setSelectedToken] = useState('WETH')

  return (
    <div className="min-h-screen bg-[#0c0d10] text-gray-200 p-4">
      <header className="flex justify-between items-center mb-6">
        <div className="text-2xl font-bold text-white">DarkNode</div>
        <nav className="space-x-6">
          <a href="#" className="hover:text-white">Trade</a>
          <a href="#" className="hover:text-white">Assets</a>
          <a href="#" className="hover:text-white">Orders</a>
          <a href="#" className="hover:text-white">Stats</a>
        </nav>
        <Button variant="outline" className="bg-transparent border-gray-600 text-white hover:bg-gray-800">
          Connect Wallet
        </Button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Trading Panel */}
        <Card className="lg:col-span-1 bg-[#1c1d21] border-gray-800">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <Button variant="ghost" className="text-lg font-semibold px-0 hover:bg-transparent text-white">
                Sell <ArrowLeftRight className="ml-2 h-4 w-4" />
              </Button>
              <Select value={selectedToken} onValueChange={setSelectedToken}>
                <SelectTrigger className="w-[120px] bg-transparent border-gray-700 text-white">
                  <SelectValue placeholder="Select token" />
                </SelectTrigger>
                <SelectContent className="bg-[#2c2d31] border-gray-700">
                  <SelectItem value="WETH">WETH</SelectItem>
                  <SelectItem value="BTC">BTC</SelectItem>
                  <SelectItem value="USDT">USDT</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4 mt-6">
              <div>
                <Label htmlFor="amount" className="text-gray-300">Amount</Label>
                <div className="relative mt-1">
                  <Input
                    id="amount"
                    placeholder="0"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-[#2c2d31] border-gray-700 pr-16 text-white"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <span className="text-gray-400 text-sm mr-3">{selectedToken}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white px-2">25%</Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white px-2">50%</Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white px-2">75%</Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white px-2">MAX</Button>
              </div>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                Connect Wallet
              </Button>
            </div>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Type</span>
                <span className="text-white">Midpoint</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Order Value</span>
                <span className="text-white">$2,342.92</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Fee</span>
                <span className="text-white">$0.9372</span>
              </div>
              <div className="flex justify-between text-green-400">
                <span>Total savings vs. Binance</span>
                <span>$1.4078</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* TradingView Chart */}
        <Card className="lg:col-span-3 bg-[#1c1d21] border-gray-800">
          <CardContent className="p-0 h-[600px]">
            <iframe
              src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_76d87&symbol=BITSTAMP%3AETHUSD&interval=D&hidesidetoolbar=1&hidetoptoolbar=1&symboledit=1&saveimage=1&toolbarbg=F1F3F6&studies=[]&theme=dark&style=1&timezone=Etc%2FUTC&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=en&utm_source=coinmarketcap.com&utm_medium=widget&utm_campaign=chart&utm_term=BITSTAMP%3AETHUSD"
              style={{width: '100%', height: '100%'}}
            />
          </CardContent>
        </Card>

        {/* Orders Table */}
        <Card className="lg:col-span-4 bg-[#1c1d21] border-gray-800">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-4">
                <Button variant="ghost" className="text-sm px-2 py-1 text-gray-400 hover:text-white">Open</Button>
                <Button variant="ghost" className="text-sm px-2 py-1 text-gray-400 hover:text-white">Side</Button>
                <Button variant="ghost" className="text-sm px-2 py-1 text-gray-400 hover:text-white">Token</Button>
              </div>
              <Button variant="ghost" className="text-sm px-2 py-1 text-gray-400 hover:text-white">Clear</Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow className="border-gray-800">
                  <TableHead className="text-gray-400">Status</TableHead>
                  <TableHead className="text-gray-400">Side</TableHead>
                  <TableHead className="text-gray-400">Asset</TableHead>
                  <TableHead className="text-gray-400">Order Value</TableHead>
                  <TableHead className="text-gray-400">Size</TableHead>
                  <TableHead className="text-gray-400">Filled</TableHead>
                  <TableHead className="text-gray-400">Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-gray-400">Sign in to view your orders.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <footer className="mt-8 flex justify-between items-center">
        <div className="text-xl font-bold text-white">DarkNode</div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Discord</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}