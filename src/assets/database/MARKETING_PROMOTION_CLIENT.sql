CREATE TABLE IF NOT EXISTS [Marketing_PromotionClient] (
	[OID] int NOT NULL PRIMARY KEY, 
	[Promotion] int, 
	[CodePromotion] nvarchar(20), 
	[Client] nvarchar(20)
);