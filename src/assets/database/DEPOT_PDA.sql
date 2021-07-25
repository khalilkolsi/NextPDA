CREATE TABLE IF NOT EXISTS [DepotPDA] (
	[IdDepot] int NOT NULL IDENTITY(1,1) PRIMARY KEY, 
	[CodeDepot] nvarchar(20), 
	[Depot] nvarchar(50)
);
CREATE UNIQUE INDEX [UQ__DepotPDA__000000000000028D]
	ON [DepotPDA] ([IdDepot])