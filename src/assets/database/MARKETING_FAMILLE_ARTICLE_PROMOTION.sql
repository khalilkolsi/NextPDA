CREATE TABLE IF NOT EXISTS [Marketing_FamilleArtilesPromotion] (
	[OID] int NOT NULL PRIMARY KEY, 
	[FamilleArticle] int, 
	[Promotion] int, 
	[CodePromotion] nvarchar(20), 
	[MontantObjectif] float, 
	[Remise] float, 
	[Article] nvarchar(100), 
	[Qt] float, 
	[Point] int, 
	[Autre] nvarchar(100)
)