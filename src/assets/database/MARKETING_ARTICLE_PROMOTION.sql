CREATE TABLE IF NOT EXISTS [Marketing_ArticlePromotion] (
	[OID] int NOT NULL PRIMARY KEY, 
	[Promotion] int, 
	[CodePromotion] nvarchar(20), 
	[Article] nvarchar(20), 
	[Remise] money, 
	[Point] smallint, 
	[Remise2] float DEFAULT 0, 
	[Remise3] float DEFAULT 0, 
	[Remise4] float DEFAULT 0
);