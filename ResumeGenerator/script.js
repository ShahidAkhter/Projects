    document.getElementById('indiv0').src = 'images/profileimg.png';
    // document.getElementById('indiv1').src = 'images/signatureimg.png';
    document.getElementById('uploadedData0').style.display = 'none';
    document.getElementById('uploadedData1').style.display = 'none';
    document.getElementById('uploadedData2').style.display = 'none';

    document.getElementById('btn0').addEventListener('click', () => {
        if (document.getElementById('phnum').value == "" || document.getElementById('email').value == "" || document.getElementById('address').value == "") {
            return;
        } else {
            document.getElementById('indiv0').src = window.URL.createObjectURL(document.getElementById('inputFile0').files[0]);
            // console.log(window.URL.createObjectURL(document.getElementById('inputFile0').files[0]))
            // document.getElementById('indiv1').src = window.URL.createObjectURL(document.getElementById('inputFile1').files[0]);
            document.getElementById('indiv2').innerText = document.getElementById('phnum').value;
            document.getElementById('indiv3').innerText = document.getElementById('email').value;
            document.getElementById('indiv14').innerText = `${document.getElementById('address').value}`;
            document.getElementById('uploadData0').style.display = 'none';
            document.getElementById('uploadedData0').style.display = 'flex';
        }

    })


    document.getElementById('btn1').addEventListener('click', () => {
        if (document.getElementById('fname').value == "" || document.getElementById('age').value == "" || document.getElementById('ffname').value == "" || document.getElementById('mfname').value == "") {
            return;
        } else {
            document.getElementById('indiv10').innerText = `Name: ${document.getElementById('fname').value} ${document.getElementById('lname').value}`;
            document.getElementById('Icon').innerText = document.getElementById('fname').value[0] + document.getElementById('lname').value[0];
            // console.log(document.getElementById('fname').value[0])
            document.getElementById('indiv11').innerText = `Age: ${document.getElementById('age').value}`;
            document.getElementById('indiv12').innerText = `Father's Name: ${document.getElementById('ffname').value} ${document.getElementById('flname').value}`;
            document.getElementById('indiv13').innerText = `Mother's Name: ${document.getElementById('mfname').value} ${document.getElementById('mlname').value}`;
            document.getElementById('uploadData1').style.display = 'none';
            document.getElementById('uploadedData1').style.display = 'flex';
        }

    })

    document.getElementById('btn2').addEventListener('click', () => {
        if (document.getElementById('summary').value == "") {
            return;
        } else {
            document.getElementById('indiv15').innerText = `${document.getElementById('summary').value}`;
            document.getElementById('indiv16').innerText = `Institute: ${document.getElementById('institute').value}`;
            document.getElementById('indiv17').innerText = `Course: ${document.getElementById('course').value}`;
            document.getElementById('indiv18').innerText = `Time: ${document.getElementById('timeperiod').value}`;
            document.getElementById('indiv19').innerText = `Percentage: ${document.getElementById('markspercent').value}%`;
            document.getElementById('indiv20').innerText = `Institute: ${document.getElementById('institute1').value}`;
            document.getElementById('indiv21').innerText = `Course: ${document.getElementById('course1').value}`;
            document.getElementById('indiv22').innerText = `Time: ${document.getElementById('timeperiod1').value}`;
            document.getElementById('indiv23').innerText = `Percentage: ${document.getElementById('markspercent1').value}%`;
            document.getElementById('uploadData2').style.display = 'none';
            document.getElementById('uploadedData2').style.display = 'flex';
        }

    })

    document.getElementById('edit0').addEventListener('click', () => {
        document.getElementById('uploadData0').style.display = 'flex';
        document.getElementById('uploadedData0').style.display = 'none';

    })
    document.getElementById('edit1').addEventListener('click', () => {
        document.getElementById('uploadData1').style.display = 'flex';
        document.getElementById('uploadedData1').style.display = 'none';

    })
    document.getElementById('edit2').addEventListener('click', () => {
        document.getElementById('uploadData2').style.display = 'flex';
        document.getElementById('uploadedData2').style.display = 'none';

    })
    document.getElementById('main').style.display='none';

    
