CREATE TABLE IF NOT EXISTS [Marketing_KitPromotionArticles] (
	[OID] int NOT NULL PRIMARY KEY, 
	[Promotion] int, 
	[CodePromotion] nvarchar(100), 
	[Article] nvarchar(20), 
	[Libelle] nvarchar(100), 
	[Qt] float, 
	[PUHT] float, 
	[Remise] float, 
	[RemiseKit] float, 
	[TVA] float
);