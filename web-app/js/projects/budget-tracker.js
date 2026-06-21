// ============================================
// BUDGET TRACKER - Web Implementation
// Based on the Python CLI version
// ============================================

function getBudgetTrackerHTML() {
    return `
        <div class="project-content">
            <h2>💰 Budget Tracker</h2>
            <p class="project-desc">Track your income and expenses, view live summaries, and analyze category breakdowns.</p>

            <div class="budget-container">
                <!-- Live Summary Cards -->
                <div class="budget-summary-grid">
                    <div class="budget-card-stat income">
                        <div class="stat-icon-wrap">
                            <i class="fas fa-arrow-trend-up"></i>
                        </div>
                        <div class="stat-info">
                            <span class="stat-label">Total Income</span>
                            <h3 class="stat-value" id="budgetTotalIncome">₹0.00</h3>
                        </div>
                    </div>
                    <div class="budget-card-stat expense">
                        <div class="stat-icon-wrap">
                            <i class="fas fa-arrow-trend-down"></i>
                        </div>
                        <div class="stat-info">
                            <span class="stat-label">Total Expenses</span>
                            <h3 class="stat-value" id="budgetTotalExpense">₹0.00</h3>
                        </div>
                    </div>
                    <div class="budget-card-stat balance" id="budgetBalanceCard">
                        <div class="stat-icon-wrap">
                            <i class="fas fa-wallet"></i>
                        </div>
                        <div class="stat-info">
                            <span class="stat-label">Net Balance</span>
                            <h3 class="stat-value" id="budgetNetBalance">₹0.00</h3>
                        </div>
                    </div>
                </div>

                <!-- Main Layout Grid -->
                <div class="budget-main-grid">
                    <!-- Left Column: Add & Breakdown -->
                    <div class="budget-left-col">
                        <!-- Add Transaction Card -->
                        <div class="budget-panel">
                            <h3><i class="fas fa-plus-minus"></i> Add Transaction</h3>
                            <form id="budgetTransactionForm" class="budget-form">
                                <!-- Type Selection Toggle -->
                                <div class="budget-type-toggle">
                                    <input type="radio" id="typeIncome" name="transType" value="income" checked>
                                    <label for="typeIncome" class="toggle-btn income">
                                        <i class="fas fa-plus"></i> Income
                                    </label>
                                    
                                    <input type="radio" id="typeExpense" name="transType" value="expense">
                                    <label for="typeExpense" class="toggle-btn expense">
                                        <i class="fas fa-minus"></i> Expense
                                    </label>
                                </div>

                                <!-- Category Selection -->
                                <div class="budget-input-group">
                                    <label for="budgetCategory">Category</label>
                                    <div class="category-select-wrapper">
                                        <select id="budgetCategory" required>
                                            <!-- Will be populated dynamically based on selected type -->
                                        </select>
                                        <input type="text" id="budgetCustomCategory" class="hidden" placeholder="Enter custom category" maxlength="20">
                                        <button type="button" id="toggleCustomCategory" class="btn-custom-cat" title="Toggle custom category">
                                            <i class="fas fa-pen"></i>
                                        </button>
                                    </div>
                                </div>

                                <!-- Description -->
                                <div class="budget-input-group">
                                    <label for="budgetDescription">Description <span class="optional">(Optional)</span></label>
                                    <input type="text" id="budgetDescription" placeholder="e.g. Monthly salary, Grocery run" maxlength="40">
                                </div>

                                <!-- Amount -->
                                <div class="budget-input-group">
                                    <label for="budgetAmount">Amount (₹)</label>
                                    <input type="number" id="budgetAmount" placeholder="0.00" min="0.01" step="0.01" required>
                                </div>

                                <button type="submit" class="btn-budget-submit">
                                    <i class="fas fa-save"></i> Save Transaction
                                </button>
                            </form>
                        </div>

                        <!-- Category Breakdown Card -->
                        <div class="budget-panel">
                            <div class="breakdown-header">
                                <h3><i class="fas fa-chart-pie"></i> Breakdown</h3>
                                <div class="breakdown-tabs">
                                    <button class="breakdown-tab active" id="btnBreakdownExpense" data-type="expense">Expenses</button>
                                    <button class="breakdown-tab" id="btnBreakdownIncome" data-type="income">Income</button>
                                </div>
                            </div>
                            <div class="breakdown-content" id="budgetBreakdownList">
                                <!-- Dynamic breakdown bars go here -->
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: All Transactions -->
                    <div class="budget-right-col">
                        <div class="budget-panel transactions-panel">
                            <div class="transactions-header">
                                <h3><i class="fas fa-list"></i> History</h3>
                                <button id="btnClearBudgetData" class="btn-clear-budget" type="button">
                                    <i class="fas fa-trash-can"></i> Clear All
                                </button>
                            </div>
                            
                            <!-- Search and Filters -->
                            <div class="transactions-filter-bar">
                                <div class="search-input-wrap">
                                    <i class="fas fa-magnifying-glass"></i>
                                    <input type="text" id="budgetSearchInput" placeholder="Search transactions...">
                                </div>
                                <select id="budgetFilterType">
                                    <option value="all">All Types</option>
                                    <option value="income">Incomes</option>
                                    <option value="expense">Expenses</option>
                                </select>
                            </div>

                            <!-- List Container -->
                            <div class="transactions-list-container">
                                <div id="budgetTransactionsList" class="transactions-list">
                                    <!-- Dynamic rows go here -->
                                </div>
                                <div id="budgetEmptyState" class="budget-empty-state">
                                    <div class="empty-icon">💸</div>
                                    <h4>No Transactions Yet</h4>
                                    <p>Add your first income or expense to start tracking your budget!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style>
            .budget-container {
                max-width: 1000px;
                margin: 0 auto;
                padding: 1rem;
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }

            /* Stat Cards styling */
            .budget-summary-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 1rem;
            }

            .budget-card-stat {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 1.25rem;
                background: var(--surface-color);
                border-radius: 14px;
                border: 1px solid var(--border-color);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                transition: transform 0.2s ease, box-shadow 0.2s ease;
            }

            .budget-card-stat:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
            }

            .stat-icon-wrap {
                width: 48px;
                height: 48px;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.25rem;
            }

            .budget-card-stat.income .stat-icon-wrap {
                background: rgba(16, 185, 129, 0.15);
                color: #10b981;
            }

            .budget-card-stat.expense .stat-icon-wrap {
                background: rgba(239, 68, 68, 0.15);
                color: #ef4444;
            }

            .budget-card-stat.balance.positive .stat-icon-wrap {
                background: rgba(59, 130, 246, 0.15);
                color: #3b82f6;
            }

            .budget-card-stat.balance.negative .stat-icon-wrap {
                background: rgba(245, 158, 11, 0.15);
                color: #f59e0b;
            }

            .stat-info {
                display: flex;
                flex-direction: column;
                gap: 0.25rem;
            }

            .stat-label {
                font-size: 0.8rem;
                color: var(--text-secondary, #888);
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            .stat-value {
                font-size: 1.4rem;
                font-weight: 700;
                margin: 0;
                color: var(--text-color);
            }

            .budget-card-stat.income .stat-value {
                color: #10b981;
            }

            .budget-card-stat.expense .stat-value {
                color: #ef4444;
            }

            /* Layout grid */
            .budget-main-grid {
                display: grid;
                grid-template-columns: 420px 1fr;
                gap: 1.5rem;
            }

            .budget-left-col {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }

            .budget-right-col {
                min-width: 0; /* Prevent flex blowout */
            }

            .budget-panel {
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 16px;
                padding: 1.5rem;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            }

            .budget-panel h3 {
                font-size: 1.15rem;
                font-weight: 600;
                margin-top: 0;
                margin-bottom: 1.25rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: var(--text-color);
                border-bottom: 1px solid var(--border-color);
                padding-bottom: 0.75rem;
            }

            /* Form Styling */
            .budget-form {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .budget-type-toggle {
                display: flex;
                background: var(--bg-color, #181d30);
                padding: 4px;
                border-radius: 10px;
                border: 1px solid var(--border-color);
                position: relative;
                margin-bottom: 0.5rem;
            }

            .budget-type-toggle input[type="radio"] {
                display: none;
            }

            .budget-type-toggle label {
                flex: 1;
                text-align: center;
                padding: 0.6rem;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
                font-size: 0.9rem;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.4rem;
                color: var(--text-secondary);
                transition: all 0.2s ease;
            }

            .budget-type-toggle input[type="radio"]#typeIncome:checked + label.income {
                background: #10b981;
                color: white;
                box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
            }

            .budget-type-toggle input[type="radio"]#typeExpense:checked + label.expense {
                background: #ef4444;
                color: white;
                box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
            }

            .budget-input-group {
                display: flex;
                flex-direction: column;
                gap: 0.4rem;
            }

            .budget-input-group label {
                font-size: 0.85rem;
                font-weight: 600;
                color: var(--text-color);
                display: flex;
                justify-content: space-between;
            }

            .budget-input-group label .optional {
                font-weight: normal;
                color: var(--text-secondary);
                font-size: 0.8rem;
            }

            .budget-input-group select,
            .budget-input-group input {
                width: 100%;
                padding: 0.7rem 0.8rem;
                border-radius: 8px;
                border: 1px solid var(--border-color);
                background: var(--bg-color);
                color: var(--text-color);
                font-size: 0.95rem;
                transition: border-color 0.2s, box-shadow 0.2s;
            }

            .budget-input-group select:focus,
            .budget-input-group input:focus {
                border-color: var(--primary-color);
                box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
                outline: none;
            }

            .category-select-wrapper {
                display: flex;
                gap: 0.5rem;
                position: relative;
            }

            .category-select-wrapper input.hidden {
                display: none;
            }

            .btn-custom-cat {
                background: var(--bg-color);
                border: 1px solid var(--border-color);
                color: var(--text-color);
                width: 42px;
                height: 42px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s ease;
                flex-shrink: 0;
            }

            .btn-custom-cat:hover {
                border-color: var(--primary-color);
                color: var(--primary-color);
            }

            .btn-custom-cat.active {
                background: var(--primary-color);
                color: white;
                border-color: var(--primary-color);
            }

            .btn-budget-submit {
                margin-top: 0.5rem;
                background: var(--primary-color);
                color: white;
                border: none;
                border-radius: 8px;
                padding: 0.75rem;
                font-weight: 600;
                font-size: 1rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                transition: all 0.2s ease;
            }

            .btn-budget-submit:hover {
                transform: translateY(-1px);
                filter: brightness(1.1);
                box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
            }

            /* Breakdown Styling */
            .breakdown-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.25rem;
                border-bottom: 1px solid var(--border-color);
                padding-bottom: 0.75rem;
            }

            .breakdown-header h3 {
                border-bottom: none;
                margin-bottom: 0;
                padding-bottom: 0;
            }

            .breakdown-tabs {
                display: flex;
                gap: 0.25rem;
                background: var(--bg-color);
                padding: 3px;
                border-radius: 8px;
                border: 1px solid var(--border-color);
            }

            .breakdown-tab {
                background: transparent;
                border: none;
                color: var(--text-secondary);
                padding: 0.4rem 0.8rem;
                border-radius: 6px;
                font-size: 0.8rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .breakdown-tab.active {
                background: var(--surface-color);
                color: var(--text-color);
                box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
            }

            .breakdown-content {
                display: flex;
                flex-direction: column;
                gap: 0.9rem;
                max-height: 250px;
                overflow-y: auto;
                padding-right: 4px;
            }

            .breakdown-item {
                display: flex;
                flex-direction: column;
                gap: 0.3rem;
            }

            .breakdown-info {
                display: flex;
                justify-content: space-between;
                font-size: 0.85rem;
                font-weight: 500;
            }

            .breakdown-name {
                color: var(--text-color);
            }

            .breakdown-amount {
                color: var(--text-secondary);
            }

            .breakdown-bar-bg {
                height: 8px;
                background: var(--bg-color, #181d30);
                border-radius: 10px;
                overflow: hidden;
                position: relative;
            }

            .breakdown-bar-fill {
                height: 100%;
                border-radius: 10px;
                width: 0;
                transition: width 0.6s cubic-bezier(0.1, 0.8, 0.3, 1);
            }

            .btnBreakdownExpense-fill {
                background: linear-gradient(90deg, #f87171, #ef4444);
            }

            .btnBreakdownIncome-fill {
                background: linear-gradient(90deg, #34d399, #10b981);
            }

            /* History Panel Styling */
            .transactions-panel {
                display: flex;
                flex-direction: column;
                height: 100%;
                min-height: 520px;
            }

            .transactions-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid var(--border-color);
                padding-bottom: 0.75rem;
                margin-bottom: 1rem;
            }

            .transactions-header h3 {
                border-bottom: none;
                margin-bottom: 0;
                padding-bottom: 0;
            }

            .btn-clear-budget {
                background: transparent;
                border: 1px solid #ef4444;
                color: #ef4444;
                border-radius: 8px;
                padding: 0.4rem 0.8rem;
                font-size: 0.8rem;
                font-weight: 600;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 0.3rem;
                transition: all 0.2s ease;
            }

            .btn-clear-budget:hover {
                background: #ef4444;
                color: white;
                box-shadow: 0 2px 8px rgba(239, 68, 68, 0.2);
            }

            .transactions-filter-bar {
                display: flex;
                gap: 0.75rem;
                margin-bottom: 1rem;
            }

            .search-input-wrap {
                flex: 1;
                position: relative;
                display: flex;
                align-items: center;
            }

            .search-input-wrap i {
                position: absolute;
                left: 10px;
                color: var(--text-secondary);
                font-size: 0.85rem;
            }

            .search-input-wrap input {
                width: 100%;
                padding: 0.55rem 0.55rem 0.55rem 1.8rem;
                font-size: 0.85rem;
                border: 1px solid var(--border-color);
                border-radius: 8px;
                background: var(--bg-color);
                color: var(--text-color);
            }

            .transactions-filter-bar select {
                padding: 0.55rem;
                font-size: 0.85rem;
                border: 1px solid var(--border-color);
                border-radius: 8px;
                background: var(--bg-color);
                color: var(--text-color);
                width: 130px;
            }

            .transactions-list-container {
                position: relative;
                flex: 1;
                overflow-y: auto;
                max-height: 380px;
                border: 1px solid var(--border-color);
                border-radius: 10px;
                background: var(--bg-color, #181d30);
            }

            .transactions-list {
                display: flex;
                flex-direction: column;
            }

            .transaction-row {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.85rem 1rem;
                border-bottom: 1px solid var(--border-color);
                transition: background-color 0.2s ease;
            }

            .transaction-row:last-child {
                border-bottom: none;
            }

            .transaction-row:hover {
                background-color: rgba(255, 255, 255, 0.02);
            }

            .trans-details-left {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                min-width: 0;
                flex: 1;
            }

            .trans-badge-icon {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.95rem;
                flex-shrink: 0;
            }

            .transaction-row.income .trans-badge-icon {
                background: rgba(16, 185, 129, 0.12);
                color: #10b981;
            }

            .transaction-row.expense .trans-badge-icon {
                background: rgba(239, 68, 68, 0.12);
                color: #ef4444;
            }

            .trans-text {
                display: flex;
                flex-direction: column;
                gap: 0.15rem;
                min-width: 0;
            }

            .trans-category-tag {
                font-weight: 600;
                font-size: 0.9rem;
                color: var(--text-color);
                display: flex;
                align-items: center;
                gap: 0.4rem;
            }

            .trans-date {
                font-size: 0.72rem;
                color: var(--text-secondary);
            }

            .trans-desc {
                font-size: 0.78rem;
                color: var(--text-secondary);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .trans-details-right {
                display: flex;
                align-items: center;
                gap: 0.85rem;
                flex-shrink: 0;
            }

            .trans-amount {
                font-family: monospace;
                font-weight: 700;
                font-size: 0.95rem;
            }

            .transaction-row.income .trans-amount {
                color: #10b981;
            }

            .transaction-row.expense .trans-amount {
                color: #ef4444;
            }

            .btn-delete-trans {
                background: transparent;
                border: none;
                color: var(--text-secondary);
                cursor: pointer;
                padding: 0.3rem;
                font-size: 0.85rem;
                border-radius: 4px;
                transition: all 0.2s ease;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .btn-delete-trans:hover {
                color: #ef4444;
                background: rgba(239, 68, 68, 0.1);
            }

            /* Empty state */
            .budget-empty-state {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 3rem 1.5rem;
                text-align: center;
            }

            .empty-icon {
                font-size: 3rem;
                margin-bottom: 0.75rem;
                animation: float 3s ease-in-out infinite;
            }

            .budget-empty-state h4 {
                margin: 0 0 0.25rem 0;
                font-size: 1.05rem;
                color: var(--text-color);
            }

            .budget-empty-state p {
                margin: 0;
                font-size: 0.85rem;
                color: var(--text-secondary);
                max-width: 240px;
            }

            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-8px); }
            }

            /* Responsive design */
            @media (max-width: 820px) {
                .budget-main-grid {
                    grid-template-columns: 1fr;
                }
                .budget-summary-grid {
                    grid-template-columns: 1fr;
                }
            }
        </style>
    `;
}

// Category mappings with emojis
const BUDGET_CATEGORIES = {
    income: [
        { value: "Salary", label: "💼 Salary" },
        { value: "Business", label: "🏢 Business" },
        { value: "Investments", label: "📈 Investments" },
        { value: "Freelance", label: "💻 Freelance" },
        { value: "Gifts", label: "🎁 Gifts" },
        { value: "Other", label: "💰 Other" }
    ],
    expense: [
        { value: "Food & Dining", label: "🍕 Food & Dining" },
        { value: "Rent & Housing", label: "🏠 Rent & Housing" },
        { value: "Utilities & Bills", label: "⚡ Utilities & Bills" },
        { value: "Transportation", label: "🚗 Transportation" },
        { value: "Entertainment", label: "🎬 Entertainment" },
        { value: "Shopping", label: "🛍️ Shopping" },
        { value: "Healthcare", label: "🏥 Healthcare" },
        { value: "Education", label: "📚 Education" },
        { value: "Miscellaneous", label: "📦 Miscellaneous" }
    ]
};

// Default icons mapping
const CATEGORY_EMOJIS = {
    "salary": "💼",
    "business": "🏢",
    "investments": "📈",
    "freelance": "💻",
    "gifts": "🎁",
    "other": "💰",
    "food & dining": "🍕",
    "rent & housing": "🏠",
    "utilities & bills": "⚡",
    "transportation": "🚗",
    "entertainment": "🎬",
    "shopping": "🛍️",
    "healthcare": "🏥",
    "education": "📚",
    "miscellaneous": "📦",
    "income_default": "📈",
    "expense_default": "📉"
};

function getCategoryEmoji(category, type) {
    const key = category.toLowerCase().trim();
    if (CATEGORY_EMOJIS[key]) {
        return CATEGORY_EMOJIS[key];
    }
    return type === "income" ? CATEGORY_EMOJIS["income_default"] : CATEGORY_EMOJIS["expense_default"];
}

function initBudgetTracker() {
    let transactions = [];
    let activeBreakdownType = "expense";
    let isCustomCategoryActive = false;

    // Elements
    const form = document.getElementById("budgetTransactionForm");
    const typeIncomeRadio = document.getElementById("typeIncome");
    const typeExpenseRadio = document.getElementById("typeExpense");
    const categorySelect = document.getElementById("budgetCategory");
    const customCategoryInput = document.getElementById("budgetCustomCategory");
    const toggleCustomBtn = document.getElementById("toggleCustomCategory");
    const descriptionInput = document.getElementById("budgetDescription");
    const amountInput = document.getElementById("budgetAmount");
    
    const totalIncomeEl = document.getElementById("budgetTotalIncome");
    const totalExpenseEl = document.getElementById("budgetTotalExpense");
    const netBalanceEl = document.getElementById("budgetNetBalance");
    const balanceCard = document.getElementById("budgetBalanceCard");

    const breakdownList = document.getElementById("budgetBreakdownList");
    const btnBreakdownExpense = document.getElementById("btnBreakdownExpense");
    const btnBreakdownIncome = document.getElementById("btnBreakdownIncome");

    const transactionsList = document.getElementById("budgetTransactionsList");
    const emptyState = document.getElementById("budgetEmptyState");
    const searchInput = document.getElementById("budgetSearchInput");
    const filterType = document.getElementById("budgetFilterType");
    const clearBtn = document.getElementById("btnClearBudgetData");

    // Exit early if elements not found
    if (!form || !categorySelect || !transactionsList) return;

    // Load Initial Data
    loadData();
    populateCategories();
    updateUI();

    // Event Listeners
    typeIncomeRadio.addEventListener("change", onTypeChange);
    typeExpenseRadio.addEventListener("change", onTypeChange);

    toggleCustomBtn.addEventListener("click", () => {
        isCustomCategoryActive = !isCustomCategoryActive;
        if (isCustomCategoryActive) {
            categorySelect.classList.add("hidden");
            categorySelect.required = false;
            customCategoryInput.classList.remove("hidden");
            customCategoryInput.required = true;
            customCategoryInput.focus();
            toggleCustomBtn.classList.add("active");
            toggleCustomBtn.innerHTML = '<i class="fas fa-list"></i>';
            toggleCustomBtn.title = "Choose standard category";
        } else {
            categorySelect.classList.remove("hidden");
            categorySelect.required = true;
            customCategoryInput.classList.add("hidden");
            customCategoryInput.required = false;
            customCategoryInput.value = "";
            toggleCustomBtn.classList.remove("active");
            toggleCustomBtn.innerHTML = '<i class="fas fa-pen"></i>';
            toggleCustomBtn.title = "Write custom category";
        }
    });

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const type = typeIncomeRadio.checked ? "income" : "expense";
        let category = "";
        
        if (isCustomCategoryActive) {
            category = customCategoryInput.value.trim();
            if (!category) return;
            // Capitalize
            category = category.charAt(0).toUpperCase() + category.slice(1);
        } else {
            category = categorySelect.value;
        }

        const description = descriptionInput.value.trim();
        const amount = parseFloat(amountInput.value);

        if (isNaN(amount) || amount <= 0) return;

        // Create Transaction
        const now = new Date();
        const dateStr = now.getFullYear() + '-' +
            String(now.getMonth() + 1).padStart(2, '0') + '-' +
            String(now.getDate()).padStart(2, '0') + ' ' +
            String(now.getHours()).padStart(2, '0') + ':' +
            String(now.getMinutes()).padStart(2, '0');

        const transaction = {
            date: dateStr,
            type: type,
            category: category,
            description: description,
            amount: Math.round(amount * 100) / 100 // round to 2 decimals
        };

        transactions.push(transaction);
        saveData();
        updateUI();

        // Reset inputs
        descriptionInput.value = "";
        amountInput.value = "";
        customCategoryInput.value = "";
        if (isCustomCategoryActive) {
            toggleCustomBtn.click(); // Reset back to select dropdown
        }
    });

    btnBreakdownExpense.addEventListener("click", () => {
        activeBreakdownType = "expense";
        btnBreakdownExpense.classList.add("active");
        btnBreakdownIncome.classList.remove("active");
        renderBreakdown();
    });

    btnBreakdownIncome.addEventListener("click", () => {
        activeBreakdownType = "income";
        btnBreakdownIncome.classList.add("active");
        btnBreakdownExpense.classList.remove("active");
        renderBreakdown();
    });

    searchInput.addEventListener("input", renderTransactions);
    filterType.addEventListener("change", renderTransactions);

    clearBtn.addEventListener("click", function() {
        if (typeof window.showConfirm === "function") {
            window.showConfirm("Are you sure you want to delete ALL transaction data?", function() {
                transactions = [];
                saveData();
                updateUI();
            });
        } else {
            // fallback
            if (confirm("Are you sure you want to delete ALL transaction data?")) {
                transactions = [];
                saveData();
                updateUI();
            }
        }
    });

    // Helper functions
    function onTypeChange() {
        populateCategories();
    }

    function populateCategories() {
        const type = typeIncomeRadio.checked ? "income" : "expense";
        const options = BUDGET_CATEGORIES[type];
        
        categorySelect.innerHTML = options.map(opt => 
            `<option value="${opt.value}">${opt.label}</option>`
        ).join("");
    }

    function loadData() {
        const stored = localStorage.getItem("budget_tracker_transactions");
        if (stored) {
            try {
                transactions = JSON.parse(stored);
            } catch(e) {
                transactions = [];
            }
        } else {
            transactions = [];
        }
    }

    function saveData() {
        localStorage.setItem("budget_tracker_transactions", JSON.stringify(transactions));
    }

    function updateUI() {
        updateSummary();
        renderBreakdown();
        renderTransactions();
    }

    function updateSummary() {
        let totalIncome = 0;
        let totalExpense = 0;

        transactions.forEach(t => {
            if (t.type === "income") totalIncome += t.amount;
            else totalExpense += t.amount;
        });

        const netBalance = totalIncome - totalExpense;

        totalIncomeEl.textContent = `₹${totalIncome.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        totalExpenseEl.textContent = `₹${totalExpense.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        
        const sign = netBalance >= 0 ? "" : "-";
        netBalanceEl.textContent = `${sign}₹${Math.abs(netBalance).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

        balanceCard.className = "budget-card-stat balance " + (netBalance >= 0 ? "positive" : "negative");
    }

    function renderBreakdown() {
        breakdownList.innerHTML = "";

        const breakdownMap = {};
        let total = 0;

        // Filter transactions for this type
        transactions.forEach(t => {
            if (t.type === activeBreakdownType) {
                breakdownMap[t.category] = (breakdownMap[t.category] || 0) + t.amount;
                total += t.amount;
            }
        });

        if (total === 0) {
            breakdownList.innerHTML = `<div style="text-align: center; color: var(--text-secondary); font-size: 0.85rem; padding: 1.5rem 0;">No ${activeBreakdownType} entries to analyze.</div>`;
            return;
        }

        // Sort categories by amount descending
        const sortedCats = Object.entries(breakdownMap).sort((a, b) => b[1] - a[1]);

        sortedCats.forEach(([cat, amount]) => {
            const percent = total > 0 ? (amount / total) * 100 : 0;
            const emoji = getCategoryEmoji(cat, activeBreakdownType);
            const fillClass = activeBreakdownType === "income" ? "btnBreakdownIncome-fill" : "btnBreakdownExpense-fill";

            const item = document.createElement("div");
            item.className = "breakdown-item";
            item.innerHTML = `
                <div class="breakdown-info">
                    <span class="breakdown-name">${emoji} ${cat} (${percent.toFixed(1)}%)</span>
                    <span class="breakdown-amount">₹${amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div class="breakdown-bar-bg">
                    <div class="breakdown-bar-fill ${fillClass}" style="width: ${percent}%"></div>
                </div>
            `;
            breakdownList.appendChild(item);
        });
    }

    function renderTransactions() {
        transactionsList.innerHTML = "";

        const query = searchInput.value.toLowerCase().trim();
        const typeFilter = filterType.value;

        // Filter and sort transactions (newest first)
        const filtered = transactions.filter(t => {
            const matchesType = typeFilter === "all" || t.type === typeFilter;
            const matchesSearch = t.category.toLowerCase().includes(query) || 
                                  (t.description && t.description.toLowerCase().includes(query));
            return matchesType && matchesSearch;
        }).reverse(); // newer entries are added to end, so reverse gets newest first

        if (filtered.length === 0) {
            emptyState.style.display = "flex";
            transactionsList.style.display = "none";
            return;
        }

        emptyState.style.display = "none";
        transactionsList.style.display = "flex";

        filtered.forEach((t, index) => {
            // Find index of transaction in original array
            const originalIndex = transactions.indexOf(t);
            const row = document.createElement("div");
            row.className = `transaction-row ${t.type}`;
            
            const emoji = getCategoryEmoji(t.category, t.type);
            const sign = t.type === "income" ? "+" : "-";

            row.innerHTML = `
                <div class="trans-details-left">
                    <div class="trans-badge-icon">
                        <span>${emoji}</span>
                    </div>
                    <div class="trans-text">
                        <span class="trans-category-tag">${t.category}</span>
                        ${t.description ? `<span class="trans-desc">${t.description}</span>` : ''}
                        <span class="trans-date">${t.date}</span>
                    </div>
                </div>
                <div class="trans-details-right">
                    <span class="trans-amount">${sign}₹${t.amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    <button class="btn-delete-trans" data-index="${originalIndex}" aria-label="Delete transaction" title="Delete transaction">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `;

            // Wire up single delete button
            const deleteBtn = row.querySelector(".btn-delete-trans");
            deleteBtn.addEventListener("click", function(e) {
                e.stopPropagation();
                const idx = parseInt(deleteBtn.getAttribute("data-index"));
                row.style.transform = "translateX(50px)";
                row.style.opacity = "0";
                row.style.transition = "all 0.3s ease";
                
                setTimeout(() => {
                    transactions.splice(idx, 1);
                    saveData();
                    updateUI();
                }, 300);
            });

            transactionsList.appendChild(row);
        });
    }
}
