const FIREBASE_LEDGER_URL = 'https://household-bubu-default-rtdb.firebaseio.com/ledger.json';

window.firebaseLedger = {
  async load() {
    const response = await fetch(FIREBASE_LEDGER_URL, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Firebase read failed: ${response.status}`);
    return response.json();
  },
  async save(data) {
    const response = await fetch(FIREBASE_LEDGER_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error(`Firebase write failed: ${response.status}`);
    return response.json();
  }
};
