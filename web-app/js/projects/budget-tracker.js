function getBudgetTrackerHTML() {
  return `
    <div class="project-content">
      <h2>💰 Budget Tracker</h2>
      <div class="budget-container">
        
        <!-- Summary Cards -->
        <div class="budget-summary">
          <div class="summary-card income">
            <div class="summary-icon">📈</div>
            <div class="summary-info">
              <span class="summary-label">Total Income</span>
              <span class="summary-value" id="totalIncome">₹0.00</span>
            </div>
          </div>
          <div class="summary-card expenses">
            <div class="summary-icon">📉</div>
            <div class="summary-info">
              <span class="summary-label">Total Expenses</span>
              <span class="summary-value" id="totalExpenses">₹0.00</span>
            </div>
          </div>
          <div class="summary-card balance" id="balanceCard">
            <div class="summary-icon" id="balanceIcon">⚖️</div>
            <div class="summary-info">
              <span class="summary-label">Net Balance</span>
              <span class="summary-value" id="netBalance">₹0.00</span>
            </div>
          </div>
        </div>

        <div class="budget-grid">
          <!-- Add Transaction Form -->
          <div class="budget-card form-section">
            <h3>Add New Transaction</h3>
            <form id="transactionForm">
              <div class="form-group">
                <label for="transType">Type</label>
                <select id="transType" required>
                  <option value="income">Income (+)</option>
                  <option value="expense">Expense (-)</option>
                </select>
              </div>

              <div class="form-group">
                <label for="transCategory">Category</label>
                <input type="text" id="transCategory" placeholder="e.g., Food, Rent, Salary, Entertainment" list="categorySuggestions" required>
                <datalist id="categorySuggestions">
                  <option value="Salary">
                  <option value="Food">
                  <option value="Rent">
                  <option value="Utilities">
                  <option value="Entertainment">
                  <option value="Travel">
                  <option value="Other">
                </datalist>
              </div>

              <div class="form-group">
                <label for="transDescription">Description (Optional)</label>
                <input type="text" id="transDescription" placeholder="e.g., Monthly grocery shopping">
              </div>

              <div class="form-group">
                <label for="transAmount">Amount (₹)</label>
                <input type="number" id="transAmount" placeholder="0.00" step="0.01" min="0.01" required>
              </div>

              <button type="submit" class="btn-check" style="width: 100%; padding: 0.75rem; font-size: 1rem; border-radius: 10px; margin-top: 1rem; border: none; background: var(--primary-color); color: white; cursor: pointer; transition: transform 0.2s;">
                ➕ Add Transaction
              </button>
            </form>
          </div>

          <!-- Analytics Section -->
          <div class="budget-card analytics-section">
            <h3>Expense Analytics</h3>
            <div id="analyticsContainer">
              <p class="empty-message">No expense data to analyze yet.</p>
            </div>
          </div>
        </div>

        <!-- Transactions Table -->
        <div class="budget-card list-section">
          <div class="list-header">
            <h3>Recent Transactions</h3>
            <button class="btn-danger-outline" id="clearAllBtn">🗑️ Clear All Data</button>
          </div>
          <div class="table-responsive">
            <table class="transaction-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="transactionList">
                <!-- Transactions will load here dynamically -->
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>

    <!-- Self-Contained Confirm Modal for Clear All -->
    <div id="budgetConfirmModal" class="budget-modal-overlay" style="display: none;">
      <div class="budget-modal-content">
        <h3>⚠️ Confirm Clear All</h3>
        <p>Are you sure you want to delete ALL transactions? This action cannot be undone.</p>
        <div class="budget-modal-actions">
          <button id="cancelClearBtn" class="btn-cancel">Cancel</button>
          <button id="confirmClearBtn" class="btn-confirm">Yes, Clear All</button>
        </div>
      </div>
    </div>

    <style>
      .budget-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 1rem;
      }

      .budget-summary {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      .summary-card {
        display: flex;
        align-items: center;
        gap: 1.25rem;
        padding: 1.5rem;
        background: var(--surface-color, #ffffff);
        border: 2px solid var(--border-color, #e2e8f0);
        border-radius: 16px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        transition: transform 0.2s;
      }

      .summary-card:hover {
        transform: translateY(-2px);
      }

      .summary-icon {
        font-size: 2.25rem;
        padding: 0.75rem;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .income .summary-icon {
        background: rgba(16, 185, 129, 0.1);
      }
      .expenses .summary-icon {
        background: rgba(239, 68, 68, 0.1);
      }
      .balance.positive .summary-icon {
        background: rgba(16, 185, 129, 0.1);
      }
      .balance.negative .summary-icon {
        background: rgba(239, 68, 68, 0.1);
      }

      .summary-info {
        display: flex;
        flex-direction: column;
        text-align: left;
      }

      .summary-label {
        font-size: 0.875rem;
        color: var(--text-secondary, #64748b);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: 600;
      }

      .summary-value {
        font-size: 1.75rem;
        font-weight: 700;
        color: var(--text-color, #0f172a);
      }

      .income .summary-value {
        color: var(--success-color, #10b981);
      }

      .expenses .summary-value {
        color: var(--danger-color, #ef4444);
      }

      .balance.positive .summary-value {
        color: var(--success-color, #10b981);
      }

      .balance.negative .summary-value {
        color: var(--danger-color, #ef4444);
      }

      .budget-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      .budget-card {
        background: var(--surface-color, #ffffff);
        border: 2px solid var(--border-color, #e2e8f0);
        border-radius: 16px;
        padding: 1.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
      }

      .budget-card h3 {
        margin-top: 0;
        margin-bottom: 1.25rem;
        color: var(--primary-color, #6366f1);
        border-bottom: 2px solid var(--border-color, #e2e8f0);
        padding-bottom: 0.5rem;
        font-size: 1.25rem;
        text-align: left;
      }

      .form-group {
        margin-bottom: 1rem;
        text-align: left;
      }

      .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        font-size: 0.9rem;
        color: var(--text-color, #0f172a);
      }

      .form-group input, .form-group select {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid var(--border-color, #e2e8f0);
        border-radius: 10px;
        background: var(--bg-color, #f8fafc);
        color: var(--text-color, #0f172a);
        font-size: 0.95rem;
        box-sizing: border-box;
        transition: border-color 0.2s;
      }

      .form-group input:focus, .form-group select:focus {
        border-color: var(--primary-color, #6366f1);
        outline: none;
      }

      .analytics-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        text-align: left;
      }

      .analytics-item {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }

      .analytics-info {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        font-weight: 500;
      }

      .progress-bar-bg {
        width: 100%;
        height: 10px;
        background: var(--border-color, #e2e8f0);
        border-radius: 6px;
        overflow: hidden;
      }

      .progress-bar-fill {
        height: 100%;
        background: linear-gradient(90deg, var(--primary-color, #6366f1), var(--secondary-color, #a855f7));
        border-radius: 6px;
        transition: width 0.3s ease;
      }

      .list-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .list-header h3 {
        margin: 0;
        border: none;
        padding: 0;
      }

      .table-responsive {
        overflow-x: auto;
        width: 100%;
      }

      .transaction-table {
        width: 100%;
        border-collapse: collapse;
        text-align: left;
        font-size: 0.95rem;
      }

      .transaction-table th, .transaction-table td {
        padding: 0.85rem 1rem;
        border-bottom: 1px solid var(--border-color, #e2e8f0);
      }

      .transaction-table th {
        font-weight: 600;
        color: var(--text-secondary, #64748b);
        background: var(--bg-color, #f8fafc);
      }

      .badge {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        border-radius: 6px;
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
      }

      .badge.income {
        background: rgba(16, 185, 129, 0.15);
        color: var(--success-color, #10b981);
      }

      .badge.expense {
        background: rgba(239, 68, 68, 0.15);
        color: var(--danger-color, #ef4444);
      }

      .btn-danger-outline {
        border: 2px solid var(--danger-color, #ef4444);
        background: transparent;
        color: var(--danger-color, #ef4444);
        padding: 0.5rem 1rem;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.2s;
      }

      .btn-danger-outline:hover {
        background: var(--danger-color, #ef4444);
        color: white;
      }

      .btn-delete {
        background: transparent;
        border: none;
        color: var(--danger-color, #ef4444);
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 6px;
        transition: background-color 0.2s;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .btn-delete:hover {
        background-color: rgba(239, 68, 68, 0.1);
      }

      .empty-message {
        text-align: center;
        color: var(--text-secondary, #64748b);
        padding: 2rem;
        font-style: italic;
      }

      /* Custom Confirmation Modal Styles */
      .budget-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
      }
      .budget-modal-content {
        background: var(--surface-color, #ffffff);
        border: 2px solid var(--border-color, #e2e8f0);
        border-radius: 16px;
        padding: 2rem;
        max-width: 400px;
        width: 90%;
        text-align: center;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
      }
      .budget-modal-content h3 {
        margin-top: 0;
        color: var(--danger-color, #ef4444);
        font-size: 1.4rem;
        text-align: center !important;
      }
      .budget-modal-content p {
        color: var(--text-color, #0f172a);
        margin: 1rem 0 1.5rem 0;
      }
      .budget-modal-actions {
        display: flex;
        justify-content: center;
        gap: 1rem;
      }
      .budget-modal-actions button {
        padding: 0.75rem 1.5rem;
        border-radius: 10px;
        font-weight: 600;
        cursor: pointer;
        border: none;
      }
      .budget-modal-actions .btn-cancel {
        background: var(--border-color, #e2e8f0);
        color: var(--text-color, #0f172a);
      }
      .budget-modal-actions .btn-confirm {
        background: var(--danger-color, #ef4444);
        color: white;
      }
    </style>
  `;
}

function initBudgetTracker() {
  const form = document.getElementById('transactionForm');
  const transType = document.getElementById('transType');
  const transCategory = document.getElementById('transCategory');
  const transDescription = document.getElementById('transDescription');
  const transAmount = document.getElementById('transAmount');

  const totalIncomeEl = document.getElementById('totalIncome');
  const totalExpensesEl = document.getElementById('totalExpenses');
  const netBalanceEl = document.getElementById('netBalance');
  const balanceCard = document.getElementById('balanceCard');
  const balanceIcon = document.getElementById('balanceIcon');

  const analyticsContainer = document.getElementById('analyticsContainer');
  const transactionList = document.getElementById('transactionList');

  // Confirmation Modal Elements
  const clearAllBtn = document.getElementById('clearAllBtn');
  const budgetConfirmModal = document.getElementById('budgetConfirmModal');
  const cancelClearBtn = document.getElementById('cancelClearBtn');
  const confirmClearBtn = document.getElementById('confirmClearBtn');

  // Load Initial Transactions
  let transactions = JSON.parse(localStorage.getItem('budget_transactions') || '[]');

  function saveAndRender() {
    localStorage.setItem('budget_transactions', JSON.stringify(transactions));
    renderUI();
  }

  function renderUI() {
    // 1. Calculate Sums
    let totalIncome = 0;
    let totalExpenses = 0;
    const expenseByCategory = {};

    transactions.forEach(t => {
      if (t.type === 'income') {
        totalIncome += t.amount;
      } else {
        totalExpenses += t.amount;
        expenseByCategory[t.category] = (expenseByCategory[t.category] || 0) + t.amount;
      }
    });

    const netBalance = totalIncome - totalExpenses;

    // 2. Update Summary Cards
    totalIncomeEl.textContent = `₹${totalIncome.toFixed(2)}`;
    totalExpensesEl.textContent = `₹${totalExpenses.toFixed(2)}`;
    netBalanceEl.textContent = `${netBalance >= 0 ? '' : '-'}₹${Math.abs(netBalance).toFixed(2)}`;

    // Net Balance Styling
    if (netBalance >= 0) {
      balanceCard.className = 'summary-card balance positive';
      balanceIcon.textContent = '✅';
    } else {
      balanceCard.className = 'summary-card balance negative';
      balanceIcon.textContent = '⚠️';
    }

    // 3. Update Category Analytics
    analyticsContainer.innerHTML = '';
    const categories = Object.keys(expenseByCategory);
    if (categories.length === 0) {
      analyticsContainer.innerHTML = '<p class="empty-message">No expense data to analyze yet.</p>';
    } else {
      const wrapper = document.createElement('div');
      wrapper.className = 'analytics-container';

      // Sort categories by expenditure (descending)
      categories
        .sort((a, b) => expenseByCategory[b] - expenseByCategory[a])
        .forEach(cat => {
          const amount = expenseByCategory[cat];
          const percentage = totalExpenses > 0 ? (amount / totalExpenses) * 100 : 0;

          const item = document.createElement('div');
          item.className = 'analytics-item';
          item.innerHTML = `
            <div class="analytics-info">
              <span>${cat}</span>
              <span>₹${amount.toFixed(2)} (${percentage.toFixed(0)}%)</span>
            </div>
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" style="width: ${percentage}%"></div>
            </div>
          `;
          wrapper.appendChild(item);
        });
      analyticsContainer.appendChild(wrapper);
    }

    // 4. Update Transaction List Table
    transactionList.innerHTML = '';
    if (transactions.length === 0) {
      transactionList.innerHTML = `
        <tr>
          <td colspan="6" class="empty-message" style="text-align: center;">No transactions found. Add some above!</td>
        </tr>
      `;
    } else {
      // Show newest first
      [...transactions].reverse().forEach(t => {
        const row = document.createElement('tr');
        const badgeClass = t.type === 'income' ? 'badge income' : 'badge expense';
        const symbol = t.type === 'income' ? '+' : '-';

        row.innerHTML = `
          <td>${t.date}</td>
          <td><span class="${badgeClass}">${t.type}</span></td>
          <td>${t.category}</td>
          <td>${t.description || '-'}</td>
          <td style="font-weight: 600; color: ${t.type === 'income' ? 'var(--success-color)' : 'var(--danger-color)'}">
            ${symbol}₹${t.amount.toFixed(2)}
          </td>
          <td>
            <button class="btn-delete" data-id="${t.id}" aria-label="Delete transaction">
              🗑️
            </button>
          </td>
        `;
        transactionList.appendChild(row);
      });

      // Hook up delete buttons
      document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = parseInt(btn.getAttribute('data-id'));
          transactions = transactions.filter(t => t.id !== id);
          saveAndRender();
        });
      });
    }
  }

  // Handle Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const category = transCategory.value.trim();
    const amount = parseFloat(transAmount.value);
    if (!category || isNaN(amount) || amount <= 0) return;

    const newTransaction = {
      id: Date.now(),
      date: new Date().toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      type: transType.value,
      category: category.charAt(0).toUpperCase() + category.slice(1),
      description: transDescription.value.trim(),
      amount: parseFloat(amount.toFixed(2))
    };

    transactions.push(newTransaction);
    saveAndRender();
    form.reset();
  });

  // Handle Custom Confirmation Modal Overlay for Clear All
  clearAllBtn.addEventListener('click', () => {
    budgetConfirmModal.style.display = 'flex';
  });

  cancelClearBtn.addEventListener('click', () => {
    budgetConfirmModal.style.display = 'none';
  });

  confirmClearBtn.addEventListener('click', () => {
    transactions = [];
    saveAndRender();
    budgetConfirmModal.style.display = 'none';
  });

  // Render initial list
  renderUI();
}
