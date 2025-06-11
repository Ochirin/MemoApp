# ESLint関連のコマンド
lint:
    npx eslint . --ext .ts,.tsx,.js,.jsx

format:
    npx eslint . --ext .ts,.tsx,.js,.jsx --fix

lint-check:
    npx eslint . --ext .ts,.tsx,.js,.jsx --max-warnings 0

# TypeScript型チェック
type-check:
    npx tsc --noEmit

# すべてのチェックを実行
check: lint type-check
    @echo "All checks passed!"

# 開発時の自動修正
dev-fix: format
    npx prettier --write .

.PHONY: lint format lint-check type-check check dev-fix