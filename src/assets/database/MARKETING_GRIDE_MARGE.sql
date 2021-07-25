CREATE TABLE IF NOT EXISTS [Marketing_GrideDesMarge] (
	[OID] int NOT NULL PRIMARY KEY, 
	[Promotion] int, 
	[CodePromotion] nvarchar(20), 
	[Ordre] smallint, 
	[BorneInf] money, 
	[BorneSup] money, 
	[Article] nvarchar(20), 
	[Qt] float, 
	[Remise] money, 
	[Point] int, 
	[Autre] nvarchar(100)
);