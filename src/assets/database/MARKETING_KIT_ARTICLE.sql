CREATE TABLE [Marketing_KitArticle] (
	[OID] int NOT NULL PRIMARY KEY, 
	[Kit] int, 
	[CodeKit] nvarchar(20), 
	[Article] nvarchar(100), 
	[Libelle] nvarchar(100), 
	[Qt] float, 
	[PUHT] float, 
	[Remise] float, 
	[TVA] float
);