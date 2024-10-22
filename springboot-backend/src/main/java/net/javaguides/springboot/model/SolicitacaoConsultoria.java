import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "solicitacao")
public class SolicitacaoConsultoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer sol_id;

    @Column(name = "user_id", nullable = false)
    private Integer user_id;

    @Column(name = "anl_id", nullable = false)
    private Integer anl_id;

    @Column(name = "data", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date data;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private Status status;

    public SolicitacaoConsultoria() {
    }

    public SolicitacaoConsultoria(Integer user_id, Integer anl_id, Date data, Status status) {
        this.user_id = user_id;
        this.anl_id = anl_id;
        this.data = data;
        this.status = status;
    }

    public Integer getSol_id() {
        return sol_id;
    }

    public void setSol_id(Integer sol_id) {
        this.sol_id = sol_id;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public Integer getAnl_id() {
        return anl_id;
    }

    public void setAnl_id(Integer anl_id) {
        this.anl_id = anl_id;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public enum Status {
        PENDENTE,
        APROVADO,
        REJEITADO
    }
}