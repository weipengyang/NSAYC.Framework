using NSAYC.Application.CRM;
using System.Data.Entity.ModelConfiguration;

namespace  NSAYC.Application.Mapping
{
    /// <summary>
    /// �� �� NSAYCFrameWork V1.1.0 �������������
    /// Copyright (c) 2013-2017 �����а����������������޹�˾
    /// �� ������������Ա
    /// �� �ڣ�2017-07-11 14:20
    /// �� �����ֽ����
    /// </summary>
    public class CrmCashBalanceMap : EntityTypeConfiguration<CrmCashBalanceEntity>
    {
        public CrmCashBalanceMap()
        {
            #region ������
            //��
            this.ToTable("LR_CRM_CASHBALANCE");
            //����
            this.HasKey(t => t.F_CashBalanceId);
            #endregion

            #region ���ù�ϵ
            #endregion
        }
    }
}

