CREATE TABLE IF NOT EXISTS [BLLigne] (
	[IdBLLigne] int NOT NULL AUTOINCREMENT PRIMARY KEY, 
	[CodeArticle] nvarchar(20) NOT NULL, 
	[IdCamionPDA] nvarchar(3), 
	[Quantiter] float, 
	[PrixHT] float, 
	[TVA] float, 
	[Remise] float, 
	[PrixTTC] float, 
	[Unite] nvarchar(10), 
	[BLNum] nvarchar(10) NOT NULL, 
	[BLType] nvarchar(10), 
	[IdPromotion] int DEFAULT 0, 
	[Point] int DEFAULT 0
)