# Tutorial for creating a FlexiLayout for a specific vendor

### <a name="index"></a> Index

1.  [Creating and setting up a FlexiLayout project](#project)
2.  [Extracting label data elements](#extract label)
3.  [Extracting table elements](#extract table)
4.  [Returning data blocks](#return data)
5.  [Exporting the layout](#export layout)
6.  [Importing the layout to a FlexiCapture project](#import)
7.  [Testing the layout](#test)
8.  [Information sources](#info)

---

### <a name="project"></a>1. Creating and setting up a FlexiLayout project
[Index](#index)

1. Open ABBYY FlexiLayout Studio located on your computer.
2. Create and name your project (Consider naming it after your vendor's name).
3. In the properties window mark a checkbox "Allow multi-page documents".
4. Choose an option of adding desired images, find them on your computer and import them.

### <a name="extract label"></a>2. Extracting label data elements
[Index](#index)

1. On the bottom-left corner expand the branch "SearchElements" and create a labeled field in it.

![](images/labeled_field.png)

2. In the properties window you can change the label's name, give the label a text (this wil be used for searching the document for a field that you want to extract), change the field's position and define the contents of the label.

#### Example

We want to extract vendor's name from the invoice. We see that it is located below the word "Pirkėjas".

![](images/vendors_name.png)

In the label's properties window we select the tab "Label" and change the "Label text". In this case we write "Pirkėjas".

![](images/label_text.png)

We also want to tell the software that the vendor's name is located below the the label text so in the "Field Position" tab we select "Below field name".

![](images/field_position.png)

To see the results we are going to match the documents. Select the images that you have imported, right-click on them and select "Match". What this will do is match the documents with your added element and show it on the screen.

![](images/match.png)

The results:

![](images/result.png)

We see that the software correctly found the location of the field however the location is too big considering we want to extract only the vendor's name.

Let's go back to the field position tab and change the search area height to 75. (We can also change the width in case the vendor's name is too long or too short but in this case it is not needed)

![](images/height.png)

Click "OK", match the documents and see the results.

![](images/correct.png)

Much better. If you follow this logic you should be capable of finding whatever field you want as long as it has a label text nearby.

#### Additional information on extracting elements

---

##### Date example 1

If you want to extract date from the invoice you can use an element called "Date". It is created the same way as the labeled text but has different properties.

![](images/date.png)

Be sure to select the format "Year, month, day" as it is most common in invoices.

![](images/date_properties.png)

Click "OK", match the documents and see the results.

![](images/result2.png)

---

##### Date example 2

You have the option of finding the date using labeled field however be sure that the date has some kind of labeled text near it like in this example:

![](images/labeled_date.png)

To achieve this create a labeled field, name it "Data", choose the correct position and change the content type as well as format to an appropriate one.

![](images/right.png)

![](images/date_format.png)

Click "OK", match the documents and see the results.

---

##### Relations

There is also an option to define the area in which the element that you want to extract is located. This is done by using relations.

For example, we see that the date is located above the vendor's name element.

![](images/relations3.png)

In the date properties window let's select "Relations". Click "Add" and a new window will pop up.

![](images/relations1.png)

Then select the reference element. <b>(Make sure that the reference element is above the date element in the "SearchElements" branch. If it isn't, drag and drop into the correct position)</b> In this case it would be "Tiekejas" which is the name of vendor's name element.

Afterwards select the appropriate position, in this case it would be above the field name.

![](images/relations2.png)

A green area should appear on the document indicating the search area. If it isn't shown, make sure that you are viewing the elements in the document (red marker).

Click "OK", match the documents and see the results.

---

This is not necessary if the software automatically finds the correct location but it is very useful in several scenarios:

- If the software fails to find the desired field, this will increase the chance of locating it by deacreasing the search area.

- If the document has several field elements with the same or similar labeled text and the software fails to find the right one. By indicating the right search area it will find the right one.

---

#### - For more information about labeled fields check out the [official documentation.](https://help.abbyy.com/en-us/flexicapture/12/flexilayout_studio/labeled_field)

### <a name="extract table"></a>3. Extracting table elements
[Index](#index)

Creation of a table is a little bit different.

1. Right-click on "Blocks" in the project tree.
2. Click "Add block", give it a name and select "Table".
3. Click on the "Columns" tab and select Add"
4. Check out the table in the invoice and add columns accordingly.

![](images/columns.png)

5. Click "OK"
6. Create a new "Table" element in the "SearchElements" branch.
7. Open the properties and in the "Columns" tab select the previously created block.
8. Edit each column so the keyword represents the value in the table columns as best as possible.
9. Match the documents and see the results. You should see someting like this:

![](images/result3.png)

#### Additional information on extracting tables

---

##### Footer

You can add a footer in case you want to limit the table's boundaries because in some invoices the table data is messy and unstructured thus the software captures more than needed. Footer solves this problem.

In this example the structure of the table is fine but we are going to add a footer anyway.

1. Open the table element's properties and select "Footer".
2. Select "Look for footer".
3. Type in a keyword that you want to be considered as a footer. In our case we'll be using "Suma be PVM".

![](images/footer.png)

4. Click "OK", match the documents and see the results.

![](images/result4.png)

As you can see the software successfully found the table's footer.

---

#### - For more information about tables check out the [official documentation.](https://help.abbyy.com/en-us/flexicapture/12/flexilayout_studio/table)

#### - YouTube tutorials:

- [Link 1](https://www.youtube.com/watch?v=2--jAMHJEP0)
- [Link 2](https://www.youtube.com/watch?v=FuBZIK2TL9w)

### <a name="return data"></a>4. Returning data blocks
[Index](#index)

Now that we created some elements of data that we want to extract, it's time to return them to the FlexiCapture software. To do this, we'll be using "Blocks". They are coloured in green.

#### Returning a labeled field or a date

1. Right-click on "Blocks" in the project tree.
2. Click "Add block", give it a name and select "Text" if the element is a "Labeled Field" or a "Date".
3. In the table's properties select the source element to be the correspondent element in the tree.
4. Make sure to choose the element's <b>field.</b> (If it's a date then you just select the date element)

![](images/block1.png)

5. Click "OK", match the documents and see the results.

![](images/block_results.png)

I advise you selecting to see only the blocks (red marker) so the screen is little bit cleaner and easier to read.

Do this for every text or date element that you've created.

#### Returning a table

We have already created a table block in the last step so now just add the source element, in this case the table's element.

Click "OK, match the documents and see the results.

![](images/block_results2.png)

Do this for every table element that you've created.

---

#### - For more information about blocks check out the [official documentation](https://help.abbyy.com/en-us/flexicapture/12/flexilayout_studio/blocks)

#### - [YouTube tutorial about FlexiLayout](https://www.youtube.com/watch?v=3a6h1T_b_Ic)

### <a name="export layout"></a>5. Exporting the layout
[Index](#index)

After you've finished creating all the desired elements and blocks, save the project, click on "Files" in top-left corner and select "Export".

If you want, adjust the name and save to some location. I recommend saving it to the folder where all the specific vendor's invoices are located.

If you wish, you can close the FlexiLayout Studio.

### <a name="import"></a>6. Importing the layout to a FlexiCapture project
[Index](#index)

1. Open the Project Setup Station located on your computer.
2. Create a FlexiCapture project if you haven't already.
3. After opening it, click on the "Project" tab and select "Document Definitions".
4. Click on "New".
5. Select "Semi-structured documents".
6. Select "Image file" and import any invoice which you've been working with in the FlexiLayout Studio.
7. Select "Load FlexiLayout" and find and select the corresponding FlexiLayout that you've saved.
8. Give it an intelligent name and make sure that the recognition language is Lithuanian. Click "Finish".

A Document Definition Editor will open and you will see all the data blocks that we've created in FlexiLayout Studio. They are returned here.

Save the Document Definition and close the editor. Make sure that you publish it.

---

#### - [YouTube tutorial](https://www.youtube.com/watch?v=4xbeGv9M4bY)

### <a name="test"></a>7. Testing the layout
[Index](#index)

1. While you are in Project Setup Station, right-click on the screen and create a new test batch.
2. If you want, give it a intelligent name and load all of that specific vendor's invoices that you've worked with in the FlexiLayout Studio.

The software should recognize the documents and apply the corresponding layout.

After it finishes you can see the recognition stats and if you click on one of the invoices you can see the data that was extracted. Using this editor data can also be verified and adjusted accordingly.

If you wish to export the data, just select the documents, right-click on them and select "Export".

### <a name="info"></a>8. Information sources
[Index](#index)

#### - [Official documentation](https://help.abbyy.com/en-us/flexicapture/12/flexilayout_studio/introducing)

#### - [YouTube tutorials](https://www.youtube.com/channel/UCWUiJcRA8RRU9pPekWDp0ww)