import React, { useState } from 'react';
import { authenticationService, organizationService } from '@/_services';
import Modal from '../../HomePage/Modal';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const EditOrganization = ({ showEditOrg, setShowEditOrg }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [newOrgName, setNewOrgName] = useState('');
  const { t } = useTranslation();

  const editOrganization = () => {
    if (!(newOrgName && newOrgName.trim())) {
      toast.error('Workspace name can not be empty.');
      return;
    }

    setIsCreating(true);
    organizationService.editOrganization({ name: newOrgName }).then(
      () => {
        authenticationService.updateCurrentUserDetails({ organization: newOrgName });
        toast.success('Workspace updated');
        window.location.reload();
      },
      () => {
        toast.error('Error while editing workspace');
      }
    );
    setIsCreating(false);
    setShowEditOrg(false);
  };

  return (
    <>
      <Modal
        show={showEditOrg}
        closeModal={() => setShowEditOrg(false)}
        title={t('header.organization.editWorkspace', 'Edit workspace')}
      >
        <div className="row">
          <div className="col modal-main">
            <input
              type="text"
              onChange={(e) => setNewOrgName(e.target.value)}
              className="form-control"
              placeholder={t('header.organization.workspaceName', 'workspace name')}
              disabled={isCreating}
              value={newOrgName}
              maxLength={25}
            />
          </div>
        </div>
        <div className="row">
          <div className="col d-flex modal-footer-btn">
            <button className="btn btn-light" onClick={() => setShowEditOrg(false)}>
              {t('globals.cancel', 'Cancel')}
            </button>
            <button className={`btn btn-primary ${isCreating ? 'btn-loading' : ''}`} onClick={editOrganization}>
              {t('globals.save', 'Save')}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
