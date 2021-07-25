CREATE TABLE IF NOT EXISTS [BLPDA] (
	[DocType] nvarchar(10), 
	[BLType] nvarchar(10), 
	[Date] datetime, 
	[BLNum] nvarchar(10), 
	[MontantHT] float, 
	[TVA] float, 
	[Remise] float, 
	[Timbre] float, 
	[MontantTTC] float, 
	[CodeClient] nvarchar(10) NOT NULL, 
	[IdCamionPDA] nvarchar(3), 
	[IdPromotion] int DEFAULT 0, 
	[SommmePoint] int DEFAULT 0, 
	[Point] int DEFAULT 0
);
