CREATE TABLE IF NOT EXISTS [Marketing_ArticleElimine] (
	[OID] int NOT NULL PRIMARY KEY, 
	[Promotion] int, 
	[CodePromotion] nvarchar(20), 
	[Article] nvarchar(100), 
	[Libelle] nvarchar(50)
);