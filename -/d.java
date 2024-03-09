import java.util.Scanner;

public class JogoAviao {

    public static void main(String[] args) {
        startGame();
    }

    public static void startGame() {
        Scanner scanner = new Scanner(System.in);

        int aviaoPosicao = 5; // Posição inicial do avião
        int obstaculoPosicao = 10; // Posição inicial do obstáculo

        System.out.println("Bem-vindo ao Jogo do Avião! Pressione 'a' para mover para a esquerda, 'd' para mover para a direita e 'q' para sair.");

        while (true) {
            // Exibir a cena do jogo
            displayGame(aviaoPosicao, obstaculoPosicao);

            // Capturar entrada do jogador
            char userInput = scanner.next().charAt(0);

            // Atualizar posição do avião com base na entrada do jogador
            if (userInput == 'a') {
                aviaoPosicao--;
            } else if (userInput == 'd') {
                aviaoPosicao++;
            } else if (userInput == 'q') {
                System.out.println("Jogo encerrado. Obrigado por jogar!");
                break;
            }

            // Atualizar posição do obstáculo
            obstaculoPosicao--;

            // Verificar colisão
            if (aviaoPosicao == obstaculoPosicao) {
                System.out.println("Você bateu no obstáculo! Fim de jogo.");
                break;
            }

            // Verificar se o jogador venceu
            if (obstaculoPosicao == 0) {
                System.out.println("Parabéns! Você passou pelo obstáculo. Você venceu!");
                break;
            }
        }

        scanner.close();
    }

    public static void displayGame(int aviaoPosicao, int obstaculoPosicao) {
        // Exibir a cena do jogo com o avião, obstáculo e pista
        for (int i = 0; i < 10; i++) {
            if (i == aviaoPosicao) {
                System.out.print("A"); // Representa o avião
            } else if (i == obstaculoPosicao) {
                System.out.print("X"); // Representa o obstáculo
            } else {
                System.out.print("-"); // Representa a pista
            }
        }
        System.out.println();
    }
}
