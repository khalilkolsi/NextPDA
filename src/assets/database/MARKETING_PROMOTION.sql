CREATE TABLE IF NOT EXISTS [Marketing_Promotion] (
	[OID] int NOT NULL PRIMARY KEY, 
	[Code] nvarchar(20), 
	[Designation] nvarchar(50), 
	[DateDebut] datetime, 
	[DateFin] datetime, 
	[Fournisseur] nvarchar(20), 
	[NaturePromotion] smallint, 
	[Active] bit, 
	[Suspendu] bit, 
	[Kit] int, 
	[CodeKit] nvarchar(20), 
	[CodeBarreKit] nvarchar(100), 
	[KitRemise] float, 
	[KitPrix] float, 
	[RemiseArticle] float, 
	[PointArticle] int, 
	[ArticlePaliers] nvarchar(20), 
	[Qt1] float, 
	[PrixHT1] float, 
	[Remise1] float, 
	[Qt2] float, 
	[PrixHT2] float, 
	[Remise2] float, 
	[PrixHT3] float, 
	[Remise3] float, 
	[Qt3] float, 
	[Qt4] float, 
	[Remise4] float, 
	[PrixHT4] float, 
	[TVAArticlePaliers] float, 
	[PrixHTArticlePaliers] float, 
	[LibelleArticlePalier] nvarchar(50), 
	[Description] nvarchar(250)
);