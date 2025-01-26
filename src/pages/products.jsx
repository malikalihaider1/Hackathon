import { useState } from 'react';

const categories = [
  {
    name: 'Wedding Loans',
    value: 'wedding',
    maxLoan: 500000,
    period: 3
  },
  {
    name: 'Home Construction Loans',
    value: 'home',
    maxLoan: 1000000,
    period: 5
  },
  {
    name: 'Business Startup Loans',
    value: 'business',
    maxLoan: 1000000,
    period: 5
  },
  {
    name: 'Education Loans',
    value: 'education',
    maxLoan: null, // For "Based on requirement"
    period: 4
  }
];

export default function Products() {
  const [category, setCategory] = useState('');
  const [deposit, setDeposit] = useState(0);
  const [loanPeriod, setLoanPeriod] = useState('');
  const [result, setResult] = useState(null);

  // Filtered data based on selected category
  const selectedCategory = categories.find((cat) => cat.value === category);

  const calculateLoan = () => {
    if (selectedCategory && loanPeriod) {
      const maxLoan = selectedCategory.maxLoan || 0;
      const estimatedLoan = (maxLoan - deposit) / loanPeriod; // Example logic
      setResult(estimatedLoan);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Loan Calculator</h3>
      
      {/* Select Category */}
      <div className="mb-4">
        <label className="block text-gray-600 mb-2 font-medium">Select Category</label>
        <select
          className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setLoanPeriod(''); // Reset loan period when category changes
            setResult(null); // Reset result
          }}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      
      {/* Display Max Loan and Default Loan Period */}
      {selectedCategory && (
        <div className="mb-4 bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-700">
            <strong>Max Loan:</strong>{' '}
            {selectedCategory.maxLoan ? `PKR ${selectedCategory.maxLoan.toLocaleString()}` : 'Based on requirement'}
          </p>
          <p className="text-gray-700">
            <strong>Default Loan Period:</strong> {selectedCategory.period} years
          </p>
        </div>
      )}

      {/* Deposit Input */}
      <div className="mb-4">
        <label className="block text-gray-600 mb-2 font-medium">Initial Deposit</label>
        <input
          type="number"
          className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Deposit Amount"
          value={deposit}
          onChange={(e) => setDeposit(Number(e.target.value))}
          disabled={!selectedCategory} // Disable if no category is selected
        />
      </div>
      
      {/* Loan Period Input */}
      {selectedCategory && (
        <div className="mb-6">
          <label className="block text-gray-600 mb-2 font-medium">Loan Period (years)</label>
          <input
            type="number"
            className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={`Enter Loan Period (Default: ${selectedCategory.period} years)`}
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(Number(e.target.value))}
            min={1}
            max={selectedCategory.period}
          />
        </div>
      )}
      
      {/* Calculate Button */}
      <button
        className={`w-full py-3 rounded-lg font-medium transition ${
          selectedCategory ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-400 text-gray-700 cursor-not-allowed'
        }`}
        onClick={calculateLoan}
        disabled={!selectedCategory || !loanPeriod || deposit < 0}
      >
        Calculate
      </button>
      
      {/* Result Display */}
      {result && (
        <p className="mt-6 text-xl text-center text-gray-700">
          Estimated Monthly Payment: <span className="font-bold">PKR {result.toFixed(2)}</span>
        </p>
      )}
    </div>
  );
}
