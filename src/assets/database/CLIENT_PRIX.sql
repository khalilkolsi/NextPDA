CREATE TABLE IF NOT EXISTS [CLIENT_PRIX] (
	[ID] int NOT NULL, 
	[CLIENT] nvarchar(10), 
	[Article] nvarchar(20), 
	[Reference] nvarchar(100), 
	[PrixVHT] float, 
	[Remise] float, 
	[gc] int
);

