#!/usr/bin/env bash
# IndexNow 즉시 색인 통보 — Bing / Naver / Yandex 등
# 사용법:
#   ./indexnow.sh                         # sitemap.xml 의 모든 URL 제출
#   ./indexnow.sh https://nextseo24.com/magazine/새글.html [...추가URL]
#
# Google 은 IndexNow 미지원 → Search Console 사이트맵으로 색인.

set -euo pipefail
cd "$(dirname "$0")"

HOST="nextseo24.com"
KEY="$(cat .indexnow-key)"
KEYLOC="https://${HOST}/${KEY}.txt"
ENDPOINT="https://api.indexnow.org/indexnow"   # 한 곳에 보내면 참여 엔진(빙·네이버·얀덱스)에 공유됨

# 제출할 URL 목록 결정
if [ "$#" -gt 0 ]; then
  URLS=("$@")
else
  # 인자 없으면 sitemap.xml 의 <loc> 전부 제출
  mapfile -t URLS < <(grep -o 'https://[^<]*' sitemap.xml)
fi

# JSON 배열 생성
LIST=$(printf '"%s",' "${URLS[@]}"); LIST="[${LIST%,}]"
BODY=$(cat <<JSON
{"host":"${HOST}","key":"${KEY}","keyLocation":"${KEYLOC}","urlList":${LIST}}
JSON
)

echo "▶ ${#URLS[@]}개 URL 제출 → ${ENDPOINT}"
printf '%s\n' "${URLS[@]}"
echo "---"
CODE=$(curl -s -o /tmp/indexnow.out -w "%{http_code}" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "${BODY}" "${ENDPOINT}")
echo "HTTP ${CODE}"
cat /tmp/indexnow.out 2>/dev/null || true
echo
case "$CODE" in
  200|202) echo "✅ 제출 성공 (200/202 = 수락됨)";;
  400) echo "⚠ 400 잘못된 요청 — 키/URL 형식 확인";;
  403) echo "⚠ 403 키 검증 실패 — ${KEYLOC} 가 배포됐는지 확인";;
  422) echo "⚠ 422 URL이 host와 불일치";;
  429) echo "⚠ 429 과다 요청 — 잠시 후 재시도";;
  *)   echo "ℹ HTTP ${CODE}";;
esac
