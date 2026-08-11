import type { BetterAuthOptions } from "@better-auth/core";
import { passkey } from "@better-auth/passkey";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { twoFactor, username } from "better-auth/plugins";
import { describe, expect, it } from "vitest";
import { generateDrizzleSchema } from "../src/generators/drizzle";

describe("generate drizzle schema for all databases", async () => {
	it("should generate drizzle schema for MySQL", async () => {
		const schema = await generateDrizzleSchema({
			file: "test.drizzle",
			adapter: drizzleAdapter(
				{},
				{
					provider: "mysql",
					schema: {},
				},
			)({} as BetterAuthOptions),
			options: {
				database: drizzleAdapter(
					{},
					{
						provider: "mysql",
						schema: {},
					},
				),
				plugins: [twoFactor(), username()],
				user: {
					modelName: "custom_user",
				},
				account: {
					modelName: "custom_account",
				},
				session: {
					modelName: "custom_session",
				},
				verification: {
					modelName: "custom_verification",
				},
			},
		});
		await expect(schema.code).toMatchFileSnapshot(
			"./__snapshots__/auth-schema-mysql.txt",
		);
	});

	it("should generate drizzle schema for SQLite", async () => {
		const schema = await generateDrizzleSchema({
			file: "test.drizzle",
			adapter: drizzleAdapter(
				{},
				{
					provider: "sqlite",
					schema: {},
				},
			)({} as BetterAuthOptions),
			options: {
				database: drizzleAdapter(
					{},
					{
						provider: "sqlite",
						schema: {},
					},
				),
				plugins: [twoFactor(), username()],
				user: {
					modelName: "custom_user",
				},
				account: {
					modelName: "custom_account",
				},
				session: {
					modelName: "custom_session",
				},
				verification: {
					modelName: "custom_verification",
				},
			},
		});
		await expect(schema.code).toMatchFileSnapshot(
			"./__snapshots__/auth-schema-sqlite.txt",
		);
	});

	it("should generate drizzle schema for MySQL with number id", async () => {
		const schema = await generateDrizzleSchema({
			file: "test.drizzle",
			adapter: drizzleAdapter(
				{},
				{
					provider: "mysql",
					schema: {},
				},
			)({} as BetterAuthOptions),
			options: {
				database: drizzleAdapter(
					{},
					{
						provider: "mysql",
						schema: {},
					},
				),
				plugins: [twoFactor(), username()],
				advanced: {
					database: {
						generateId: "serial",
					},
				},
				user: {
					modelName: "custom_user",
				},
				account: {
					modelName: "custom_account",
				},
				session: {
					modelName: "custom_session",
				},
				verification: {
					modelName: "custom_verification",
				},
			},
		});
		await expect(schema.code).toMatchFileSnapshot(
			"./__snapshots__/auth-schema-mysql-number-id.txt",
		);
	});
	it("should generate drizzle schema for MySQL with uuid id", async () => {
		const schema = await generateDrizzleSchema({
			file: "test.drizzle",
			adapter: drizzleAdapter(
				{},
				{
					provider: "mysql",
					schema: {},
				},
			)({} as BetterAuthOptions),
			options: {
				database: drizzleAdapter(
					{},
					{
						provider: "mysql",
						schema: {},
					},
				),
				plugins: [twoFactor(), username()],
				advanced: {
					database: {
						generateId: "uuid",
					},
				},
				user: {
					modelName: "custom_user",
				},
				account: {
					modelName: "custom_account",
				},
				session: {
					modelName: "custom_session",
				},
				verification: {
					modelName: "custom_verification",
				},
			},
		});
		await expect(schema.code).toMatchFileSnapshot(
			"./__snapshots__/auth-schema-mysql-uuid.txt",
		);
	});

	it("should generate drizzle schema for PostgreSQL with uuid id", async () => {
		const schema = await generateDrizzleSchema({
			file: "test.drizzle",
			adapter: drizzleAdapter(
				{},
				{
					provider: "pg",
					schema: {},
				},
			)({} as BetterAuthOptions),
			options: {
				database: drizzleAdapter(
					{},
					{
						provider: "pg",
						schema: {},
					},
				),
				plugins: [twoFactor(), username()],
				advanced: {
					database: {
						generateId: "uuid",
					},
				},
				user: {
					modelName: "custom_user",
				},
				account: {
					modelName: "custom_account",
				},
				session: {
					modelName: "custom_session",
				},
				verification: {
					modelName: "custom_verification",
				},
			},
		});
		await expect(schema.code).toMatchFileSnapshot(
			"./__snapshots__/auth-schema-pg-uuid.txt",
		);
	});
	it("should generate drizzle schema for SQLite with uuid id", async () => {
		const schema = await generateDrizzleSchema({
			file: "test.drizzle",
			adapter: drizzleAdapter(
				{},
				{
					provider: "sqlite",
					schema: {},
				},
			)({} as BetterAuthOptions),
			options: {
				database: drizzleAdapter(
					{},
					{
						provider: "sqlite",
						schema: {},
					},
				),
				plugins: [twoFactor(), username()],
				advanced: {
					database: {
						generateId: "uuid",
					},
				},
				user: {
					modelName: "custom_user",
				},
				account: {
					modelName: "custom_account",
				},
				session: {
					modelName: "custom_session",
				},
				verification: {
					modelName: "custom_verification",
				},
			},
		});
		await expect(schema.code).toMatchFileSnapshot(
			"./__snapshots__/auth-schema-sqlite-uuid.txt",
		);
	});

	it("should generate drizzle schema for SQLite with number id", async () => {
		const schema = await generateDrizzleSchema({
			file: "test.drizzle",
			adapter: drizzleAdapter(
				{},
				{
					provider: "sqlite",
					schema: {},
				},
			)({} as BetterAuthOptions),
			options: {
				database: drizzleAdapter(
					{},
					{
						provider: "sqlite",
						schema: {},
					},
				),
				plugins: [twoFactor(), username()],
				advanced: {
					database: {
						generateId: "serial",
					},
				},
				user: {
					modelName: "custom_user",
				},
				account: {
					modelName: "custom_account",
				},
				session: {
					modelName: "custom_session",
				},
				verification: {
					modelName: "custom_verification",
				},
			},
		});
		await expect(schema.code).toMatchFileSnapshot(
			"./__snapshots__/auth-schema-sqlite-number-id.txt",
		);
	});
});

describe("generate drizzle schema for all databases with passkey plugin", async () => {
	it("should generate drizzle schema for MySQL with passkey plugin", async () => {
		const schema = await generateDrizzleSchema({
			file: "test.drizzle",
			adapter: drizzleAdapter(
				{},
				{
					provider: "mysql",
					schema: {},
				},
			)({} as BetterAuthOptions),
			options: {
				database: drizzleAdapter(
					{},
					{
						provider: "mysql",
						schema: {},
					},
				),
				plugins: [passkey()],
				user: {
					modelName: "custom_user",
				},
				account: {
					modelName: "custom_account",
				},
				session: {
					modelName: "custom_session",
				},
				verification: {
					modelName: "custom_verification",
				},
			},
		});
		await expect(schema.code).toMatchFileSnapshot(
			"./__snapshots__/auth-schema-mysql-passkey.txt",
		);
	});

	it("should generate drizzle schema for SQLite with passkey plugin", async () => {
		const schema = await generateDrizzleSchema({
			file: "test.drizzle",
			adapter: drizzleAdapter(
				{},
				{
					provider: "sqlite",
					schema: {},
				},
			)({} as BetterAuthOptions),
			options: {
				database: drizzleAdapter(
					{},
					{
						provider: "sqlite",
						schema: {},
					},
				),
				plugins: [passkey()],
				user: {
					modelName: "custom_user",
				},
				account: {
					modelName: "custom_account",
				},
				session: {
					modelName: "custom_session",
				},
				verification: {
					modelName: "custom_verification",
				},
			},
		});
		await expect(schema.code).toMatchFileSnapshot(
			"./__snapshots__/auth-schema-sqlite-passkey.txt",
		);
	});

	it("should generate drizzle schema for PostgreSQL with passkey plugin", async () => {
		const schema = await generateDrizzleSchema({
			file: "test.drizzle",
			adapter: drizzleAdapter(
				{},
				{
					provider: "pg",
					schema: {},
				},
			)({} as BetterAuthOptions),
			options: {
				database: drizzleAdapter(
					{},
					{
						provider: "pg",
						schema: {},
					},
				),
				plugins: [passkey()],
				user: {
					modelName: "custom_user",
				},
				account: {
					modelName: "custom_account",
				},
				session: {
					modelName: "custom_session",
				},
				verification: {
					modelName: "custom_verification",
				},
			},
		});
		await expect(schema.code).toMatchFileSnapshot(
			"./__snapshots__/auth-schema-pg-passkey.txt",
		);
	});

	it("should generate drizzle schema for MySQL with passkey plugin and number id", async () => {
		const schema = await generateDrizzleSchema({
			file: "test.drizzle",
			adapter: drizzleAdapter(
				{},
				{
					provider: "mysql",
					schema: {},
				},
			)({} as BetterAuthOptions),
			options: {
				database: drizzleAdapter(
					{},
					{
						provider: "mysql",
						schema: {},
					},
				),
				plugins: [passkey()],
				advanced: {
					database: {
						generateId: "serial",
					},
				},
				user: {
					modelName: "custom_user",
				},
				account: {
					modelName: "custom_account",
				},
				session: {
					modelName: "custom_session",
				},
				verification: {
					modelName: "custom_verification",
				},
			},
		});
		await expect(schema.code).toMatchFileSnapshot(
			"./__snapshots__/auth-schema-mysql-passkey-number-id.txt",
		);
	});

	it("should generate drizzle schema for SQLite with passkey plugin and number id", async () => {
		const schema = await generateDrizzleSchema({
			file: "test.drizzle",
			adapter: drizzleAdapter(
				{},
				{
					provider: "sqlite",
					schema: {},
				},
			)({} as BetterAuthOptions),
			options: {
				database: drizzleAdapter(
					{},
					{
						provider: "sqlite",
						schema: {},
					},
				),
				plugins: [passkey()],
				advanced: {
					database: {
						generateId: "serial",
					},
				},
				user: {
					modelName: "custom_user",
				},
				account: {
					modelName: "custom_account",
				},
				session: {
					modelName: "custom_session",
				},
				verification: {
					modelName: "custom_verification",
				},
			},
		});
		await expect(schema.code).toMatchFileSnapshot(
			"./__snapshots__/auth-schema-sqlite-passkey-number-id.txt",
		);
	});

	it("should generate drizzle schema for MSSQL", async () => {
		const schema = await generateDrizzleSchema({
			file: "test.drizzle",
			adapter: drizzleAdapter(
				{},
				{
					provider: "mssql",
					schema: {},
				},
			)({} as BetterAuthOptions),
			options: {
				database: drizzleAdapter(
					{},
					{
						provider: "mssql",
						schema: {},
					},
				),
				plugins: [twoFactor(), username()],
				user: { modelName: "custom_user" },
				account: { modelName: "custom_account" },
				session: { modelName: "custom_session" },
				verification: { modelName: "custom_verification" },
			},
		});
		await expect(schema.code).toMatchFileSnapshot(
			"./__snapshots__/auth-schema-mssql.txt",
		);
	});

	it("should generate drizzle schema for MSSQL with number id", async () => {
		const schema = await generateDrizzleSchema({
			file: "test.drizzle",
			adapter: drizzleAdapter(
				{},
				{
					provider: "mssql",
					schema: {},
				},
			)({} as BetterAuthOptions),
			options: {
				database: drizzleAdapter(
					{},
					{
						provider: "mssql",
						schema: {},
					},
				),
				plugins: [twoFactor(), username()],
				advanced: {
					database: {
						generateId: "serial",
					},
				},
				user: { modelName: "custom_user" },
				account: { modelName: "custom_account" },
				session: { modelName: "custom_session" },
				verification: { modelName: "custom_verification" },
			},
		});
		await expect(schema.code).toMatchFileSnapshot(
			"./__snapshots__/auth-schema-mssql-number-id.txt",
		);
	});

	it("should generate drizzle schema for MSSQL with passkey plugin", async () => {
		const schema = await generateDrizzleSchema({
			file: "test.drizzle",
			adapter: drizzleAdapter(
				{},
				{
					provider: "mssql",
					schema: {},
				},
			)({} as BetterAuthOptions),
			options: {
				database: drizzleAdapter(
					{},
					{
						provider: "mssql",
						schema: {},
					},
				),
				plugins: [passkey()],
			},
		});
		await expect(schema.code).toMatchFileSnapshot(
			"./__snapshots__/auth-schema-mssql-passkey.txt",
		);
	});

	/**
	 * SQL Server rejects `varchar(max)` as an index key column, so every string
	 * column that participates in an index needs a bounded length. Asserted
	 * explicitly because the snapshots above would happily record a regression.
	 */
	it("should never key an MSSQL index on a varchar(max) column", async () => {
		const schema = await generateDrizzleSchema({
			file: "test.drizzle",
			adapter: drizzleAdapter(
				{},
				{
					provider: "mssql",
					schema: {},
				},
			)({} as BetterAuthOptions),
			options: {
				database: drizzleAdapter(
					{},
					{
						provider: "mssql",
						schema: {},
					},
				),
				plugins: [twoFactor(), username(), passkey()],
			},
		});

		const schemaCode = schema.code ?? "";
		const unboundedColumns = new Set(
			[
				...schemaCode.matchAll(
					/(\w+):\s*varchar\(\s*"[^"]+"\s*,\s*\{\s*length:\s*"max"/g,
				),
			].map(([, property]) => property!),
		);
		const indexKeyColumns = [
			...schemaCode.matchAll(
				/(?:uniqueIndex|index)\(\s*"([^"]+)"\s*\)\s*\.on\(([^)]*)\)/g,
			),
		].flatMap(([, indexName, columns]) =>
			[...columns!.matchAll(/table\.(\w+)/g)].map(([, column]) => ({
				indexName: indexName!,
				column: column!,
			})),
		);

		expect(indexKeyColumns.length).toBeGreaterThan(0);
		expect(
			indexKeyColumns.filter(({ column }) => unboundedColumns.has(column)),
		).toEqual([]);
	});
});
