/* eslint-disable @typescript-eslint/no-explicit-any */
export default function BalanceDisplay({ balance } : any) {
  return (
    <div className="border-l-4 border-green-500 text-green-700 p-4 rounded">
      <p className="font-bold">Current Balance</p>
      <p className="text-2xl">${balance.toFixed(2)}</p>
    </div>
  )
}

