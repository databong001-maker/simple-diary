// 간편다이어리 서비스 워커 - 최소 구성 (PWA 설치 요건 충족용, 별도 캐싱 전략 없음)
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => { /* 네트워크 그대로 통과 */ });
