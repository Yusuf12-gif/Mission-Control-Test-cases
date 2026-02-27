# Mission Control - API Test Suite

A comprehensive API testing suite built with **Playwright** for the Mission Control attendance and employee management system.

## Overview

This project contains automated API tests for various endpoints of the Mission Control platform, including:
- Attendance statistics and summaries
- Dashboard metrics
- Employee data management
- Touchpoint tracking
- Attendance analysis and reporting

## Features

✅ **API Testing** - Comprehensive test coverage for RESTful API endpoints  
✅ **Parallel Execution** - Tests run in parallel for faster feedback  
✅ **HTML Reports** - Detailed test reports with execution history  
✅ **Cross-Browser Support** - Tests configured for Chromium and Firefox  

## Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

## Installation

1. Clone or download the project:
   ```bash
   cd Mission\ Control
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in a specific file
```bash
npx playwright test tests/api/GetAttendanceStatistics.spec.ts
```

### Run tests in UI mode (interactive)
```bash
npx playwright test --ui
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run tests with a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
```

## Viewing Test Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

The report will open in your default browser and display detailed test results with execution times and screenshots.

## Project Structure

```
Mission Control/
├── tests/
│   ├── example.spec.ts                 # Example test file
│   └── api/
│       ├── attendancemonth.spec.ts     # Attendance by month tests
│       ├── dashboardmetrics.spec.ts    # Dashboard metrics tests
│       ├── GetAllEmployeeswithEvents.spec.ts  # Employee events tests
│       ├── GetAllTouchpoints.spec.ts   # Touchpoints tests
│       ├── GetAttendanceStatistics.spec.ts    # Attendance statistics tests
│       └── GetAttendanceSummarybyMonth.spec.ts # Monthly summary tests
├── playwright.config.ts                # Playwright configuration
├── playwright-report/                  # Test reports (generated)
├── test-results/                       # Test results (generated)
├── package.json                        # Project dependencies
└── README.md                           # This file
```

## Configuration

### playwright.config.ts

Key configuration settings:

- **Base URL**: `https://172.16.19.90`
- **Timeout**: 50 seconds per test
- **Parallel Execution**: Enabled by default
- **HTML Reporter**: Enabled for detailed results
- **Trace Collection**: Enabled on first retry in CI

### Authentication

Tests use Bearer token authentication. Update the token in test files as needed:

```typescript
const token = 'your-jwt-token-here';
headers: {
    Authorization: `Bearer ${token}`,
}
```

## Dependencies

- **@playwright/test** (v1.58.2) - Test framework and browser automation
- **@types/node** (v25.3.0) - TypeScript definitions for Node.js
- **dotenv** (v17.3.1) - Environment variable management


## Common Commands

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests (if configured in scripts) |
| `npx playwright test` | Run all tests sequentially |
| `npx playwright test --ui` | Run in interactive UI mode |
| `npx playwright show-report` | View HTML test report |
| `npx playwright test --debug` | Run with Playwright Inspector |

## Troubleshooting

### HTTPS Certificate Issues

The configuration includes `ignoreHTTPSErrors: true` to allow testing against self-signed certificates.

### Test Timeouts

Adjust the global timeout in `playwright.config.ts`:
```typescript
timeout: 50000, // in milliseconds
```

### Token Expiration

Ensure authentication tokens are valid. Tests will fail with 401 Unauthorized if tokens are expired.

## Contributing

1. Create test files in the appropriate `tests/` subdirectory
2. Follow the naming convention: `*.spec.ts`
3. Use descriptive test names
4. Include proper assertions and error handling
5. Test reports will be generated automatically

## License

ISC

## Support

For issues or questions regarding this test suite, please contact the development team.
