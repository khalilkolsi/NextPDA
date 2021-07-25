CREATE TABLE IF NOT EXISTS [MyLog] (
	[IdDate] datetime DEFAULT GETDATE(), 
	[Action] nvarchar(200)
);