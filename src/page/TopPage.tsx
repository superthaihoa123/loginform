import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import MasterLayout from '../layout/MasterLayout';
import DialogConfirm, { ButtonProps } from '../components/DialogConfirm';

function TopPage() {
  const [isShowPopup, setShowPopup] = useState(false);
  const [messageDialog, setMessageDialog] = useState('');
  const [buttons, setButtons] = useState(Array<ButtonProps>);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const savedChange = () => {
    console.log('Saved change');
    setShowPopup(false);
  };
  const showConfirmDialog = () => {
    setShowPopup(true);
    setMessageDialog('変更内容を保存しますか？');
    setButtons(() => [
      {
        text: '保存',
        okButton: true,
        onClickButton: savedChange,
        className: 'button-dialog',
      },
      {
        text: '保存しない',
        okButton: false,
        onClickButton: () => {
          console.log("Don't save");
          setShowPopup(false);
        },
        className: 'button-dialog',
      },
      {
        text: 'キャンセル',
        okButton: false,
        onClickButton: () => {
          console.log('Cancel');
          setShowPopup(false);
        },
        className: 'button-dialog',
      },
    ]);
  };

  return (
    <MasterLayout>
      <div className="content">
        <Container className="pb-1 p-5 mb-4 bg-light rounded-3 container">
          <h1 className="header">Welcome To Top Page</h1>
        </Container>
      </div>
    </MasterLayout>
  );
}

export default TopPage;
