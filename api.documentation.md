Entities:
Product
=======

Technical name: A\_Product

Use
---

This entity contains the fields related to general product master data.

Parameters
----------

Parameter

Short Description

Description

Key Field

Product

Product Number

Alphanumeric key uniquely identifying the product.

Yes

ProductType

Product Type

Product type defines certain attributes of the product and has important control functions.

No

CrossPlantStatus

Cross-Plant Product Status

Indicates whether the product may be used in the following areas for all plants: Materials management, Production planning and control, Plant maintenance and so on.

No

CrossPlantStatusValidityDate

Date from which the cross-plant product status is valid

Date from which the cross-plant product status is valid

No

CreationDate

Created On

Date on which the record was created

No

CreatedByUser

Name of Person Who Created Object

Name of the person who created the record

No

LastChangeDate

Date of Last Change

Date on which the record was last changed.

No

LastChangedByUser

Name of Person Who Changed Object

Peron who changed the object last.

No

LastChangeDateTime

Last Changed Date and Time

Specifies the date and time at which the record was last changed

IsMarkedForDeletion

Flag product for Deletion at Client Level

Indicator that allows you to flag a master record for deletion.

No

ProductOldID

Old Product Number

Number under which you have managed the product so far or still manage it, for example, in another system or in a card index.

No

GrossWeight

Gross Weight

Gross weight expressed in the unit of weight specified by you in the Unit of weight field.

No

PurchaseOrderQuantityunitUnit

Order unit

Specifies the unit of measure in which the product is ordered.

No

SourceOfSupply

Source of Supply

Restricts the search for sources of supply for this product to external (normal) or internal (stock transfer) sources of supply, and also allows you to define a search sequence.

No

WeightUnit

Weight Unit

Unit referring to the gross weight or net weight of the product.

No

NetWeight

Net Weight

Net weight expressed in the unit of weight specified by you in the Unit of weight field.

No

CountryOfOrigin

Country of Origin of Product (Non-Preferential Origin)

The country in which the product has been produced.

No

CompetitorID

Competitor

Customer number of the competitor. Competitors are managed in the SAP system as customers of a particular account group. This account group defines internally that the customer is a competitor.

No

ProductGroup

Product Group

Key that is used to group together several products or services with the same attributes, and to assign them to a particular product group.

No

BaseUnit

Base Unit of Measure

Unit of measure in which stocks of the product are managed

No

ItemCategoryGroup

General item category group

Products grouping that helps the system to determine item categories during sales document processing.

No

ProductHierarchy

Product Hierarchy

Alphanumeric character string for grouping together product by combining different characteristics. It is used for analyses and price determination.

No

Division

Division

A way of grouping materials, products, or services

No

VarblPurOrdUnitIsActive

Variable Purchase Order Unit Active

Activation of the variable purchase order unit

No

VolumeUnit

Volume Unit

Unit referring to the volume of the product

No

MaterialVolume

Volume

Space that the product occupies per unit of volume. The volume refers to the unit specified in the Volume unit field. Space that the product occupies per unit of volume. The volume refers to the unit specified in the Volume unit field.

No

ANPCode

ANP Code

Identifies the products that are controlled by the Brazilian Oil Agency.

No

Brand

Brand

Brand to which the product belongs

No

ProcurementRule

Procurement rule

Determines the rules on the replenishability of a product for distribution centers and stores.

No

ValidityStartDate

Valid-From Date

Date indicating as of when an entry is valid.

No

LowLevelcode

Low-Level Code

The lowest level that a product appears in any product structure of the company.

No

ProdNoInGenProdInPrepackProd

Product Number of the Generic Product in Prepack Materials

Generic product to which the prepack Product is assigned.

No

SerialIdentifierAssgmtProfile

Serial Number Profile

Serial Number Profile

No

SizeOrDimensionText

Size/dimensions

Used to record the size or dimensions of the product

No

IndustryStandardName

Industry Standard Description (such as ANSI or ISO)

Description of the product in accordance with the appropriate industry standard (such as ANSI or ISO).

No

ProductStandardID

The global trade item number (EAN/UPC/GTIN)

A standardized unit that uniquely identifies a product relating to a unit of measure or type of packaging

No

InternationalArticleNumberCat

Category of International Article Number (EAN)

Category of International Article Number (EAN)

No

ProductIsConfigurable

Configurable Product

Indicator that determines whether the product is configurable.

No

IsBatchManagementRequired

Batch management requirement indicator

Specifies whether the product is managed in batches.

No

ExternalProductGroup

External Product Group

Key that can be used to assign the product to an external product group or to a product group determined according to external systematics.

No

CrossPlantConfigurableProduct

Cross-Plant Configurable Product

Alphanumeric key uniquely identifying the configurable product.

No

SerialNoExplicitnessLevel

Level of Explicitness for Serial Number

Level on which the serial number must be unique.

No

ProductManufacturerNumber

Manufacturer Part Number

Specifies the number used by the manufacturer, or also by the supplier, to manage a product.

No

ManufacturerNumber

Manufacturer Number

Specifies the manufacturer of the MPN material or the manufacturer's plant for which a manufacturer master record has been created.

ManufacturerPartProfile

Mfr part profile

Defines how you can work with MPN products in the procurement process.

No

ChangeNumber

Change Number

Change Number

No

MaterialRevisionLevel

Revision Level

Revision Level

No

HandlingIndicator

Handling Indicator

Indicator that specifies how products are handled in the warehouse.

No

WarehouseProductGroup

Warehouse Product Group

Groups products by warehousing points of view.

No

WarehouseStorageCondition

Warehouse Storage Condition

Describes the storage condition that should be used to store the product.

No

StandardHandlingUnitType

Standard HU Type

Describes the standard handling unit type for mixed handling units, where no packing instruction is used for creating the HU.

No

SerialNumberProfile

Serial Number Profile

Serial Number Profile

No

AdjustmentProfile

Adjustment Profile

It determines how inbound delivery item quantities are to be distributed to outbound delivery order item quantities, and which inbound delivery items are relevant for adjustment according to the tolerance.

No

PreferredUnitOfMeasure

Preferred Alternative UoM for Warehouse Operations

It is the unit which is used to handle a product in the warehouse.

No

IsPilferable

Pilferable

Indicates that the product is pilferable, and possibly requires special storage in a secure storage type/section within the warehouse.

No

IsRelevantForHzdsSubstances

Relevant for Hazardous Substances

Indicates that there is hazardous substance data for this product.

No

QuarantinePeriod

Quarantine Period

Numeric value indicating the period for quarantine. This value is read along with the unit of measure in the Time Unit for Quarantine Period field

No

TimeUnitForQuarantinePeriod

Time Unit for Quarantine Period

Time Unit for Quarantine Period. For example, days, hours, weeks, and so on.

No

QualityInspectionGroup

Quality Inspection Group

Quality Inspection Group

No

HandlingUnitType

Handling Unit Type

Describes the handling unit type of a packaging product

No

HasVariableTareWeight

Variable Tare Weight

Flags all packaging materials for this packaging product type as packaging materials with a variable tare weight

No

MaximumPackagingLength

Maximum Packing Length of Packaging Product

Maximum Packing Length of Packaging Product

No

MaximumPackagingWidth

Maximum Packing Width of Packaging Product

Maximum Packing Width of Packaging Product

No

MaximumPackagingHeight

Maximum Packing Height of Packaging Product

Maximum Packing Height of Packaging Product

No

`````````````

Sales Text
==========

Technical Name: A\_ProductSalesText

Use
---

This entity contains the fields related to product sales text.

Parameters
----------

Parameter

Short Description

Description

Key Field

Product

Product Number

Alphanumeric key uniquely identifying the product.

Yes

ProductSalesOrg

Sales Organization

An organizational unit responsible for the sale of certain products or services

Yes

SalesStatusValidityDate

Distribution Channel

The way in which products or services reach the customer.

Yes

Language

Language Key

The language key indicates

*   the language in which texts are displayed
    
*   the language in which you enter texts
    
*   the language in which the system prints texts.
    

Yes

LongText

Long Text

Additional information related to the sales data of a product.

No

`````````````````

Product Description
===================

Technical Name: A\_ProductDescription

Use
---

This entity contains the fields related to product description.

Parameters
----------

Parameter

Short Description

Description

Key Field

Product

Product Number

Alphanumeric key uniquely identifying the product

Yes

Language

Language Key

Code identifying the language set for the record. For example, EN for English

Yes

ProductDescription

Product Description

Description about the product

No

`````````````````````

Read Product Master Data:
========================

Purpose
-------

With this operation, you can read product master data for the following entities using the method GET:

*   A\_Product
    
*   A\_ProductDescription
    
*   A\_ProductPlant
    
*   A\_ProductBasicText
    
*   A\_ProductInspectionText
    
*   A\_ProductProcurement
    
*   A\_ProductPurchaseText
    
*   A\_ProductQualityMgmt
    
*   A\_ProductSales
    
*   A\_ProductSalesTax
    
*   A\_ProductStorage
    
*   A\_ProductUnitsOfMeasure
    
*   A\_ProductSalesDelivery
    
*   A\_ProductValuation
    
*   A\_ProductMLAccount
    
*   A\_ProductMLPrices
    
*   A\_ProductPlantMRPArea
    
*   A\_ProductPlantQualityMgmt
    
*   A\_ProductPlantSales
    
*   A\_ProductPlantStorage
    
*   A\_ProductPlantText
    
*   A\_ProductPlantIntlTrd
    
*   A\_ProductPlantCosting
    
*   A\_ProductPlantForecasting
    
*   A\_ProductPlantProcurement
    
*   A\_ProductSupplyPlanning
    
*   A\_ProductWorkScheduling
    
*   A\_ProductStorageLocation
    
*   A\_ProductSalesText
    
*   A\_ProductUnitsOfMeasureEAN
    
*   A\_ProductValuationAccount
    
*   Batch Requests
    

Sample URL: /sap/opu/odata/sap/API\_PRODUCT\_SRV/A\_Product(Product='DEMOPRODUCT001')?$format=json

Response
--------

Examples
--------

### Request

    GET <host>/sap/opu/odata/sap/API_PRODUCT_SRV/A_Product(Product='DEMOPRODUCT001')?$format=json HTTP/1.1
    Content-Type: application/json
    
    

### Success Response

**Sample Code**

    {
    	"Product": "DEMOPRODUCT001",
    	"ProductType": "FERT",
    	"CrossPlantStatus": "01",
    	"CrossPlantStatusValidityDate": "/Date(1588291200000)/",
    	"CreationDate": "/Date(1583020800000)/",
    	"CreatedByUser": "DEMOUSER",
    	"LastChangeDate": "/Date(1583020800000)/",
    	"LastChangedByUser": "DEMOUSER",
    	"LastChangeDateTime": "/Date(1583073519000+0000)/",
    	"IsMarkedForDeletion": false,
    	"ProductOldID": "",
    	"GrossWeight": "10.000",
    	"PurchaseOrderQuantityUnit": "",
    	"SourceOfSupply": "",
    	"WeightUnit": "KG",
    	"NetWeight": "9.000",
    	"CountryOfOrigin": "",
    	"CompetitorID": "",
    	"ProductGroup": "A001",
    	"BaseUnit": "EA",
    	"ItemCategoryGroup": "NORM",
    	"ProductHierarchy": "",
    	"Division": "00",
    	"VarblPurOrdUnitIsActive": "",
    	"VolumeUnit": "",
    	"MaterialVolume": "0.000",
    	"ANPCode": "0",
    	"Brand": "",
    	"ProcurementRule": "",
    	"ValidityStartDate": null,
    	"LowLevelCode": "",
    	"ProdNoInGenProdInPrepackProd": "",
    	"SerialIdentifierAssgmtProfile": "",
    	"SizeOrDimensionText": "",
    	"IndustryStandardName": "",
    	"ProductStandardID": "",
    	"InternationalArticleNumberCat": "",
    	"ProductIsConfigurable": false,
    	"IsBatchManagementRequired": false,
    	"ExternalProductGroup": "",
    	"CrossPlantConfigurableProduct": "",
    	"SerialNoExplicitnessLevel": "",
    	"ProductManufacturerNumber": "",
    	"ManufacturerNumber": "",
    	"ManufacturerPartProfile": "",
    	"QltyMgmtInProcmtIsActive": false,
    	"IndustrySector": "M",
    	"ChangeNumber": "",
    	"MaterialRevisionLevel": "",
    	"HandlingIndicator": "",
    	"WarehouseProductGroup": "",
    	"WarehouseStorageCondition": "",
    	"StandardHandlingUnitType": "",
    	"SerialNumberProfile": "",
    	"AdjustmentProfile": "",
    	"PreferredUnitOfMeasure": "",
    	"IsPilferable": false,
    	"IsRelevantForHzdsSubstances": false,
    	"QuarantinePeriod": "0",
    	"TimeUnitForQuarantinePeriod": "",
    	"QualityInspectionGroup": "",
    	"AuthorizationGroup": "",
    	"HandlingUnitType": "",
    	"HasVariableTareWeight": false,
    	"MaximumPackagingLength": "0.000",
    	"MaximumPackagingWidth": "0.000",
    	"MaximumPackagingHeight": "0.000",
    	"UnitForMaxPackagingDimensions": "",
    	"to_Description": {
    		"__deferred": {
    			"uri": "/sap/opu/odata/sap/API_PRODUCT_SRV/A_Product('DEMOPRODUCT001')/to_Description"
    		}
    	},
    	"to_Plant": {
    		"__deferred": {
    			"uri": "/sap/opu/odata/sap/API_PRODUCT_SRV/A_Product('DEMOPRODUCT001')/to_Plant"
    		}
    	},
    	"to_ProductBasicText": {
    		"__deferred": {
    			"uri": "/sap/opu/odata/sap/API_PRODUCT_SRV/A_Product('DEMOPRODUCT001')/to_ProductBasicText"
    		}
    	},
    	"to_ProductInspectionText": {
    		"__deferred": {
    			"uri": "/sap/opu/odata/sap/API_PRODUCT_SRV/A_Product('DEMOPRODUCT001')/to_ProductInspectionText"
    		}
    	},
    	"to_ProductProcurement": {
    		"__deferred": {
    			"uri": "/sap/opu/odata/sap/API_PRODUCT_SRV/A_Product('DEMOPRODUCT001')/to_ProductProcurement"
    		}
    	},
    	"to_ProductPurchaseText": {
    		"__deferred": {
    			"uri": "/sap/opu/odata/sap/API_PRODUCT_SRV/A_Product('DEMOPRODUCT001')/to_ProductPurchaseText"
    		}
    	},
    	"to_ProductQualityMgmt": {
    		"__deferred": {
    			"uri": "/sap/opu/odata/sap/API_PRODUCT_SRV/A_Product('DEMOPRODUCT001')/to_ProductQualityMgmt"
    		}
    	},
    	"to_ProductSales": {
    		"__deferred": {
    			"uri": "/sap/opu/odata/sap/API_PRODUCT_SRV/A_Product('DEMOPRODUCT001')/to_ProductSales"
    		}
    	},
    	"to_ProductSalesTax": {
    		"__deferred": {
    			"uri": "/sap/opu/odata/sap/API_PRODUCT_SRV/A_Product('DEMOPRODUCT001')/to_ProductSalesTax"
    		}
    	},
    	"to_ProductStorage": {
    		"__deferred": {
    			"uri": "/sap/opu/odata/sap/API_PRODUCT_SRV/A_Product('DEMOPRODUCT001')/to_ProductStorage"
    		}
    	},
    	"to_ProductUnitsOfMeasure": {
    		"__deferred": {
    			"uri": "/sap/opu/odata/sap/API_PRODUCT_SRV/A_Product('DEMOPRODUCT001')/to_ProductUnitsOfMeasure"
    		}
    	},
    	"to_SalesDelivery": {
    		"__deferred": {
    			"uri": "/sap/opu/odata/sap/API_PRODUCT_SRV/A_Product('DEMOPRODUCT001')/to_SalesDelivery"
    		}
    	},
    	"to_Valuation": {
    		"__deferred": {
    			"uri": "/sap/opu/odata/sap/API_PRODUCT_SRV/A_Product('DEMOPRODUCT001')/to_Valuation"
    		}
    	}
    }

### Error Response

**Sample Code**

    <?xml version="1.0" encoding="UTF-8"?>
    
    -<error xmlns="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata">
    
    <code>/IWBEP/CM_MGW_RT/020</code>
    
    <message xml:lang="en">Resource not found for segment 'A_ProductType'</message>
    
    
    -<innererror>
    
    
    -<application>
    
    <component_id>LO-MD-MM</component_id>
    
    <service_namespace>/SAP/</service_namespace>
    
    <service_id>API_PRODUCT_SRV</service_id>
    
    <service_version>0001</service_version>
    
    </application>
    
    <transactionid>A8B79913143305D0E005EC39DDE1C27B</transactionid>
    
    <timestamp>20200520043936.3110760</timestamp>
    
    
    -<Error_Resolution>
    
    <SAP_Transaction>For backend administrators: use ADT feed reader "SAP Gateway Error Log" or run transaction /IWFND/ERROR_LOG on SAP Gateway hub system and search for entries with the timestamp above for more details</SAP_Transaction>
    
    <SAP_Note>See SAP Note 1797736 for error analysis (https://service.sap.com/sap/support/notes/1797736)</SAP_Note>
    
    </Error_Resolution>
    
    
    -<errordetails>
    
    
    -<errordetail>
    
    <code>/IWBEP/CX_MGW_BUSI_EXCEPTION</code>
    
    <message>Resource not found for segment 'A_ProductType'</message>
    
    <propertyref/>
    
    <severity>error</severity>
    
    <target/>
    
    <transition>false</transition>
    
    </errordetail>
    
    </errordetails>
    
    </innererror>
    
    </error>

```````````````````

Handling Fields Present in Mulitple Entities During Replication
===============================================================

The fields listed below are present in multiple entities. It is essential that these fields must be passed consistently in the payload while sending a request. When fields present in multiple nodes are passed inconsistently, the existing will be overwritten by the values present in the second node.

**Note**

Use the preferred node only when you are sending a single request (not deep) for only one entity.

In case you are passing a deep request or batch request with multiple entities then the same value should be passed for these fields across all nodes. For example, consider that you are sending data of both A\_ProductPlant and A\_ProductSupplyPlanning in a single request then, all the common fields like MRPType, ProcurementType and so on, should be passed with same value under A\_ProductPlant and A\_ProductSupplyPlanning.

Fields
------

Fields Present in Multiple Entities

Field Name

Nodes

Preferred Nodes

AvailabilityCheckType

A\_ProductPlant

A\_ProductPlantSales

A\_ProductSupplyPlanning

A\_ProductPlantSales

OR

A\_ProductSupplyPlanning

MRPType

A\_ProductPlant

A\_ProductSupplyPlanning

A\_ProductSupplyPlanning

ABCIndicator

A\_ProductPlant

A\_ProductSupplyPlanning

A\_ProductSupplyPlanning

FixedLotSizeQuantity

A\_ProductPlant

A\_ProductSupplyPlanning

A\_ProductSupplyPlanning

GoodsReceiptDuration

A\_ProductPlant

A\_ProductSupplyPlanning

A\_ProductSupplyPlanning

MaximumLotSizeQuantity

A\_ProductPlant

A\_ProductSupplyPlanning

A\_ProductSupplyPlanning

MinimumLotSizeQuantity

A\_ProductPlant

A\_ProductSupplyPlanning

A\_ProductSupplyPlanning

MRPResponsible

A\_ProductPlant

A\_ProductSupplyPlanning

A\_ProductSupplyPlanning

ProcurementType

A\_ProductPlant

A\_ProductSupplyPlanning

A\_ProductSupplyPlanning

CountryOfOrigin

A\_ProductPlant

A\_ProductPlantIntlTrd

A\_ProductPlantIntlTrd

RegionOfOrigin

A\_ProductPlant

A\_ProductPlantIntlTrd

A\_ProductPlantIntlTrd

ConsumptionTaxCtrlCode

A\_ProductPlant

A\_ProductPlantIntlTrd

A\_ProductPlantIntlTrd

IsCoProduct

A\_ProductPlant

A\_ProductPlantCosting

A\_ProductPlantCosting

HasPostToInspectionStock

A\_ProductPlant

A\_ProductPlantQualityMgmt

A\_ProductPlantQualityMgmt

PurchaseOrderQuantityUnit

A\_ProductPlant

A\_ProductProcurement

A\_ProductProcurement

QltyMgmtInProcmtIsActive

A\_ProductPlant

A\_ProductPlantQualityMgmt

A\_ProductPlantQualityMgmt

ProductionInvtryManagedLoc

A\_ProductPlant

A\_ProductWorkScheduling

A\_ProductPlant for MRP relevant data

And

A\_ProductWorkScheduling for work scheduling relevant data