/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.google.com', { timeout: 60000 });
  await page.goto('https://uaibconnect.bankofindia.co.in/omnineo', { timeout: 60000 });
  
  // Wait for the input field to be visible and fill it
  await page.waitForSelector('[data-testid="text-input-outlined"]');
  await page.fill('[data-testid="text-input-outlined"]', 'PANTRYMIX');
  
  // Optional: Press Enter if it's a search field
  // await page.press('[data-testid="text-input-outlined"]', 'Enter');
  
  await browser.close();
})();
