CREATE TABLE  IF NOT EXISTS [ARTICLE] (
	[ID] int NOT NULL, 
	[NATURE] int, 
	[RACCOURCI] int, 
	[ARTICLE] nvarchar(20), 
	[ORIGINE] nvarchar(20), 
	[COMPOSE] nvarchar(20), 
	[REFERENCE] nvarchar(100), 
	[CoMatiere] float, 
	[RemiseAccorde] float, 
	[CoFabrication] float, 
	[DroitConsommation] float, 
	[PrixHT] float, 
	[FraisChargement] float, 
	[FraisTransport] float, 
	[AutreFraisPerCent] float, 
	[AutreFrais] float, 
	[MargeSecurite] float, 
	[TVAachat] float, 
	[AutreTaxe] float, 
	[PrixRevient] float, 
	[PrixRevientTTC] float, 
	[Remise1] float, 
	[Remise2] float, 
	[Remise3] float, 
	[Remise4] float, 
	[Remise5] float, 
	[Remise6] float, 
	[UniteAchat] nvarchar(10), 
	[CollisageAchat] float, 
	[PoidsAchat] float, 
	[CalculPrixVente] int, 
	[Marge] float, 
	[PrixVHT] float, 
	[Fodec] float, 
	[GICA] float, 
	[TVA] float, 
	[PrixVTTC] float, 
	[Unite] nvarchar(10), 
	[CollisageVente] float, 
	[Poids] float, 
	[FacteurStock] float, 
	[Homologue] int, 
	[SM] int, 
	[PVPon] int, 
	[PVP] float, 
	[emballage] float, 
	[RemiseMax] float, 
	[PMP] float, 
	[DPA] float, 
	[DATEENTREE] nvarchar(10), 
	[StockPMP] float, 
	[StockDPA] float, 
	[DATESORTIE] datetime, 
	[StockMin] float, 
	[StockMax] float, 
	[StockAlerte] float, 
	[StockCmd] float, 
	[StockReel] float, 
	[StockAchat] float, 
	[STOCK_INITIAL] float, 
	[STOCK_ENTREE] float, 
	[STOCK_CASSE] float, 
	[STOCK_SORTIE] float, 
	[STOCK] float, 
	[REGION] nvarchar(10), 
	[GC] int, 
	[FLAG] int, 
	[ANNEE] nvarchar(5), 
	[FAMILLE] int, 
	[SOUSFAMILLE] int, 
	[CATEGORIE] int, 
	[CLASSE] int, 
	[FILTRE1] int, 
	[FILTRE2] int, 
	[FILTRE3] int, 
	[FILTRE4] int, 
	[FILTRE5] int, 
	[FILTRE6] int, 
	[CIN_FRN] nvarchar(10), 
	[FRN] nvarchar(100), 
	[QteCmd] float, 
	[DELAI] int, 
	[PromotionOn] int, 
	[PromotionDebut] datetime, 
	[PromotionFin] datetime, 
	[PromotionCalcul] int, 
	[PromotionMarge] float, 
	[PromotionPrixHT] float, 
	[PromotionPrixTTC] float, 
	[T1_TarifOn] int, 
	[T1_QteDebut] float, 
	[T1_QteFin] float, 
	[T1_Calcul] int, 
	[T1_Marge] float, 
	[T1_PrixHT] float, 
	[T1_PrixTTC] float, 
	[T2_TarifOn] int, 
	[T2_QteDebut] float, 
	[T2_QteFin] float, 
	[T2_Calcul] int, 
	[T2_Marge] float, 
	[T2_PrixHT] float, 
	[T2_PrixTTC] float, 
	[T3_TarifOn] int, 
	[T3_QteDebut] float, 
	[T3_QteFin] float, 
	[T3_Calcul] int, 
	[T3_Marge] float, 
	[T3_PrixHT] float, 
	[T3_PrixTTC] float, 
	[DATECREATION] nvarchar(15), 
	[UTILISATEUR1] nvarchar(20), 
	[DATEMODIF] nvarchar(15), 
	[UTILISATEUR2] nvarchar(20), 
	[MOLDELE] nvarchar(10), 
	[MARQUE] nvarchar(10), 
	[pFIDELITE] float, 
	[PrixInitial] float, 
	[E2012] float, 
	[S2012] float, 
	[I2012] float, 
	[R2012] float, 
	[ROTATION] float, 
	[Q1] float, 
	[Q2] float, 
	[pQ1] float, 
	[pQ2] float, 
	[A01] nvarchar(3), 
	[A02] nvarchar(3), 
	[A03] nvarchar(3), 
	[A04] nvarchar(3), 
	[A05] nvarchar(3), 
	[A06] nvarchar(3), 
	[A07] nvarchar(3), 
	[A08] nvarchar(3), 
	[A09] nvarchar(3), 
	[A10] nvarchar(3), 
	[A11] nvarchar(3), 
	[A12] nvarchar(3), 
	[A13] nvarchar(3), 
	[I2015] float, 
	[I2014] float, 
	[S2015] float, 
	[E2015] float, 
	[DELTA] float, 
	[M2015] float, 
	[ECART] float, 
	[STK_INFO] float, 
	[ACHAT_TTC] float, 
	[txtFAMILLE] nvarchar(100), 
	[codeFamille] nvarchar(6), 
	[CAMION] nvarchar(10)
);

INSERT INTO [ARTICLE] ([ID],[ARTICLE],[REFERENCE],[PrixVHT],[TVA],[PrixVTTC],[Unite],[RemiseMax],[StockDPA],[STOCK_INITIAL],[STOCK_ENTREE],[STOCK_CASSE],[STOCK_SORTIE],[STOCK],[FAMILLE],[PromotionOn],[PromotionDebut],[PromotionFin],[PromotionPrixHT],[PromotionPrixTTC],[T1_PrixHT],[T1_PrixTTC],[T2_PrixHT],[T2_PrixTTC],[T3_PrixHT],[T3_PrixTTC],[A09],[A10],[ECART]) VALUES (87549,'EAU1000','EAU SAFIA (90CL)',7.424,0,7.424,'CAISSE',20,0,0,0,0,0,0,10,0,'20150404','20150404',0,0,7.424,7.424,6.903,6.903,7.424,7.424,'F','S',0);
INSERT INTO [ARTICLE] ([ID],[ARTICLE],[REFERENCE],[PrixVHT],[TVA],[PrixVTTC],[Unite],[RemiseMax],[StockDPA],[STOCK_INITIAL],[STOCK_ENTREE],[STOCK_CASSE],[STOCK_SORTIE],[STOCK],[FAMILLE],[PromotionOn],[PromotionDebut],[PromotionFin],[PromotionPrixHT],[PromotionPrixTTC],[T1_PrixHT],[T1_PrixTTC],[T2_PrixHT],[T2_PrixTTC],[T3_PrixHT],[T3_PrixTTC],[A09],[A10],[ECART]) VALUES (87550,'BGS2000','COCA COLA STANDARD 20CL  CAI 24BOUT',10.47,0,10.47,'CAISSE',20,0,0,0,0,0,0,2,0,'20150404','20150404',0,0,10.47,10.47,9.476,9.476,10.149,10.149,'F','',0);
INSERT INTO [ARTICLE] ([ID],[ARTICLE],[REFERENCE],[PrixVHT],[TVA],[PrixVTTC],[Unite],[RemiseMax],[StockDPA],[STOCK_INITIAL],[STOCK_ENTREE],[STOCK_CASSE],[STOCK_SORTIE],[STOCK],[FAMILLE],[PromotionOn],[PromotionDebut],[PromotionFin],[PromotionPrixHT],[PromotionPrixTTC],[T1_PrixHT],[T1_PrixTTC],[T2_PrixHT],[T2_PrixTTC],[T3_PrixHT],[T3_PrixTTC],[A09],[A10],[ECART]) VALUES (87551,'BGS2020','BOGA LIMONADE STANDARD 25CL CAI 24BOUT',9.8,0,9.8,'CAISSE',20,0,0,0,0,0,0,2,0,'20150404','20150404',0,0,9.8,9.8,8.87,8.87,9.5,9.5,'','',0);
INSERT INTO [ARTICLE] ([ID],[ARTICLE],[REFERENCE],[PrixVHT],[TVA],[PrixVTTC],[Unite],[RemiseMax],[StockDPA],[STOCK_INITIAL],[STOCK_ENTREE],[STOCK_CASSE],[STOCK_SORTIE],[STOCK],[FAMILLE],[PromotionOn],[PromotionDebut],[PromotionFin],[PromotionPrixHT],[PromotionPrixTTC],[T1_PrixHT],[T1_PrixTTC],[T2_PrixHT],[T2_PrixTTC],[T3_PrixHT],[T3_PrixTTC],[A09],[A10],[ECART]) VALUES (87552,'BGS2030','BOGA CIDRE STANDARD 30CL CAI 24BOUT',11.97,0,11.97,'CAISSE',20,0,0,0,0,0,0,2,0,'20150404','20150404',0,0,11.97,11.97,10.794,10.794,11.595,11.595,'F','',0);
INSERT INTO [ARTICLE] ([ID],[ARTICLE],[REFERENCE],[PrixVHT],[TVA],[PrixVTTC],[Unite],[RemiseMax],[StockDPA],[STOCK_INITIAL],[STOCK_ENTREE],[STOCK_CASSE],[STOCK_SORTIE],[STOCK],[FAMILLE],[PromotionOn],[PromotionDebut],[PromotionFin],[PromotionPrixHT],[PromotionPrixTTC],[T1_PrixHT],[T1_PrixTTC],[T2_PrixHT],[T2_PrixTTC],[T3_PrixHT],[T3_PrixTTC],[A09],[A10],[ECART]) VALUES (87553,'BGF2060','SCHWEPPES FAMIL 1 LITRE',15.719,0,15.719,'CAISSE',20,0,0,0,0,0,0,2,0,'20150404','20150404',0,0,15.399,15.399,14.479,14.479,15.399,15.399,'F','',0);
INSERT INTO [ARTICLE] ([ID],[ARTICLE],[REFERENCE],[PrixVHT],[TVA],[PrixVTTC],[Unite],[RemiseMax],[StockDPA],[STOCK_INITIAL],[STOCK_ENTREE],[STOCK_CASSE],[STOCK_SORTIE],[STOCK],[FAMILLE],[PromotionOn],[PromotionDebut],[PromotionFin],[PromotionPrixHT],[PromotionPrixTTC],[T1_PrixHT],[T1_PrixTTC],[T2_PrixHT],[T2_PrixTTC],[T3_PrixHT],[T3_PrixTTC],[A09],[A10],[ECART]) VALUES (87554,'BGF2030','BOGA CIDRE FAMIL',15.719,0,15.719,'CAISSE',20,0,0,0,0,0,0,2,0,'20150404','20150404',0,0,15.399,15.399,14.479,14.479,15.399,15.399,'F','',0);